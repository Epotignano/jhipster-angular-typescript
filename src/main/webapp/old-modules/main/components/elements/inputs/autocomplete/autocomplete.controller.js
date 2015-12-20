(function ()
{
    'use strict';

    angular
        .module('app.components.elements.inputs.autocomplete')
        .controller('AutocompleteController', AutocompleteController);

    /** @ngInject */
    function AutocompleteController($log)
    {
        var vm = this;

        // Data
        vm.states = loadAll();

        // Methods
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;

        //////////

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll()
        {
            var allStates = 'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,Florida,' +
                            'Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,' +
                            'Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,' +
                            'New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,' +
                            'Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,' +
                            'Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming';
            return allStates.split(',').map(function (state)
            {
                return {
                    value  : state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Search for states...
         * remote dataservice call.
         */
        function querySearch(query)
        {
            var results = query ? vm.states.filter(createFilterFor(query)) : vm.states;
            return results;
        }

        function searchTextChange(text)
        {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item)
        {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query)
        {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state)
            {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }

})();