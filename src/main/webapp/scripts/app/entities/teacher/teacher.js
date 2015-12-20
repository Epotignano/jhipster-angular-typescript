'use strict';

angular.module('springTestApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('teacher', {
                parent: 'entity',
                url: '/teachers',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'springTestApp.teacher.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/teacher/teachers.html',
                        controller: 'TeacherController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('teacher');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('teacher.detail', {
                parent: 'entity',
                url: '/teacher/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'springTestApp.teacher.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/teacher/teacher-detail.html',
                        controller: 'TeacherDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('teacher');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Teacher', function($stateParams, Teacher) {
                        return Teacher.get({id : $stateParams.id});
                    }]
                }
            })
            .state('teacher.new', {
                parent: 'teacher',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/teacher/teacher-dialog.html',
                        controller: 'TeacherDialogController',
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
                        $state.go('teacher', null, { reload: true });
                    }, function() {
                        $state.go('teacher');
                    })
                }]
            })
            .state('teacher.edit', {
                parent: 'teacher',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/teacher/teacher-dialog.html',
                        controller: 'TeacherDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Teacher', function(Teacher) {
                                return Teacher.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('teacher', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('teacher.delete', {
                parent: 'teacher',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/teacher/teacher-delete-dialog.html',
                        controller: 'TeacherDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Teacher', function(Teacher) {
                                return Teacher.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('teacher', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
