/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {
	export class TemplateUtils {
		
		constructor(private $compile :ng.ICompileService) {		}
		
		TableActionButtons = (data, type, full, meta) => {
			return '<a  class="md-fab md-mini md-accent" ui-sref="app.teachers.edit({id :' + data.id + '})">'
				+ 'Editar'
                + '</a>';
		}

	}
	
	angular.module('springTestApp')
		.service('TemplateUtils', TemplateUtils);
}