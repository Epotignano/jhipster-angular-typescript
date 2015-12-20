'use strict';

angular.module('springTestApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('course', {
                parent: 'entity',
                url: '/courses',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'springTestApp.course.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/course/courses.html',
                        controller: 'CourseController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('course');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('course.detail', {
                parent: 'entity',
                url: '/course/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'springTestApp.course.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/course/course-detail.html',
                        controller: 'CourseDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('course');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Course', function($stateParams, Course) {
                        return Course.get({id : $stateParams.id});
                    }]
                }
            })
            .state('course.new', {
                parent: 'course',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/course/course-dialog.html',
                        controller: 'CourseDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    name: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('course', null, { reload: true });
                    }, function() {
                        $state.go('course');
                    })
                }]
            })
            .state('course.edit', {
                parent: 'course',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/course/course-dialog.html',
                        controller: 'CourseDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Course', function(Course) {
                                return Course.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('course', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('course.delete', {
                parent: 'course',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/course/course-delete-dialog.html',
                        controller: 'CourseDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Course', function(Course) {
                                return Course.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('course', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
