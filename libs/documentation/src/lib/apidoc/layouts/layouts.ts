const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "Page",
            "id": "interface-Page-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page number</p>\n",
                    "line": 26
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page size</p>\n",
                    "line": 31
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of pages</p>\n",
                    "line": 36
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SearchListInterface",
            "id": "interface-SearchListInterface-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getData",
                    "args": [
                        {
                            "name": "search",
                            "type": "SearchParameters"
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SearchResult>",
                    "typeParameters": [],
                    "line": 61,
                    "description": "<p>Method to get the takes it takes in the SearchParameters and returns SearchResult object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 843,
                                "end": 849,
                                "flags": 0,
                                "escapedText": "search"
                            },
                            "type": "SearchParameters",
                            "tagName": {
                                "pos": 837,
                                "end": 842,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        }
    ],
    "injectables": [
        {
            "name": "SdsDrawerCommunicationService",
            "id": "injectable-SdsDrawerCommunicationService-f9aa94bfe2455784ded364dfaec0289e",
            "file": "libs/packages/layouts/src/lib/feature/subheader/drawer-communication.service.ts",
            "properties": [
                {
                    "name": "contentTemplate",
                    "defaultValue": "this.currentTemplate.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "currentTemplate",
                    "defaultValue": "new BehaviorSubject<TemplateRef<any>>(null)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "this.isOpen.asObservable()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "isOpen",
                    "defaultValue": "new BehaviorSubject(false)",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 6,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "onDrawerOpen",
                    "args": [
                        {
                            "name": "open",
                            "type": "boolean"
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12,
                    "jsdoctags": [
                        {
                            "name": "open",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "description": "",
            "sourceCode": "import { Injectable, TemplateRef } from '@angular/core';\r\nimport { BehaviorSubject } from 'rxjs';\r\n\r\n@Injectable()\r\nexport class SdsDrawerCommunicationService {\r\n  private isOpen = new BehaviorSubject(false);\r\n  isDrawerOpen = this.isOpen.asObservable();\r\n\r\n  private currentTemplate= new BehaviorSubject<TemplateRef<any>>(null);\r\n  contentTemplate = this.currentTemplate.asObservable();\r\n\r\n  onDrawerOpen(open: boolean, temp : TemplateRef<any>){\r\n    this.isOpen.next(open);\r\n    this.currentTemplate.next(temp);  \r\n  }\r\n}",
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "SearchListConfiguration",
            "id": "class-SearchListConfiguration-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "defaultSortValue",
                    "type": "string",
                    "optional": false,
                    "description": "<p>default sort value</p>\n",
                    "line": 88
                },
                {
                    "name": "pageSize",
                    "defaultValue": "25",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Starting page size</p>\n",
                    "line": 93
                },
                {
                    "name": "sortList",
                    "type": "sortItem[]",
                    "optional": false,
                    "description": "<p>List of sort by items</p>\n",
                    "line": 83
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SearchParameters",
            "id": "class-SearchParameters-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "filter",
                    "type": "any",
                    "optional": false,
                    "description": "<p>filter data</p>\n",
                    "line": 17
                },
                {
                    "name": "page",
                    "type": "Page",
                    "optional": false,
                    "description": "<p>page  </p>\n",
                    "line": 7
                },
                {
                    "name": "sortField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Sort value</p>\n",
                    "line": 12
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SearchResult",
            "id": "class-SearchResult-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "items",
                    "type": "any[]",
                    "optional": false,
                    "description": "<p>Items to be displayed</p>\n",
                    "line": 50
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items (beyond the page)</p>\n",
                    "line": 45
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "sortItem",
            "id": "class-sortItem-f0a015f283d595cf2af37c0de61570ec",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport class SearchParameters {\r\n\r\n    /**\r\n     * page  \r\n     */\r\n    page: Page;\r\n\r\n    /**\r\n     * Sort value\r\n     */\r\n    sortField: string\r\n\r\n    /**\r\n     * filter data\r\n     */\r\n    filter: any;\r\n\r\n}\r\n\r\nexport interface Page {\r\n\r\n    /**\r\n     * Page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * Page size\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * Total number of pages\r\n     */\r\n    totalPages: number;\r\n\r\n}\r\n\r\nexport class SearchResult {\r\n\r\n    /**\r\n     * Total number of items (beyond the page)\r\n     */\r\n    totalItems: number;\r\n\r\n    /**\r\n     * Items to be displayed\r\n     */\r\n    items: any[];\r\n}\r\n\r\n\r\n\r\nexport interface SearchListInterface {\r\n\r\n    /**\r\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\r\n     * @param search \r\n     */\r\n    getData(search: SearchParameters): Observable<SearchResult>;\r\n}\r\n\r\nexport class sortItem {\r\n    /**\r\n     * Text to be displayed\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Value of Item\r\n     */\r\n    value: string;\r\n\r\n\r\n}\r\n\r\nexport class SearchListConfiguration {\r\n\r\n    /**\r\n     * List of sort by items\r\n     */\r\n    sortList: sortItem[];\r\n\r\n    /**\r\n     * default sort value\r\n     */\r\n    defaultSortValue: string;\r\n\r\n    /**\r\n     * Starting page size\r\n     */\r\n    pageSize: number = 25;\r\n\r\n}",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed</p>\n",
                    "line": 68
                },
                {
                    "name": "value",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Value of Item</p>\n",
                    "line": 73
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        }
    ],
    "directives": [],
    "components": [
        {
            "name": "SdsActionsMenuComponent",
            "id": "component-SdsActionsMenuComponent-41de6c2929cece4193a73b67983cda53",
            "file": "libs/packages/layouts/src/lib/feature/actions-menu/actions-menu.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-actions-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "actions-menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 8
                },
                {
                    "name": "size",
                    "line": 9,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 10,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-actions-menu',\r\n  templateUrl: 'actions-menu.component.html'\r\n})\r\nexport class SdsActionsMenuComponent {\r\n  @Input() model;\r\n  @Input() size: string;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            },
            "templateData": "<!-- Button that triggers menu (sdsMenuTriggerFor) -->\r\n<button\r\n  class=\"sds-button sds-button--circular\"\r\n  [class.sds-button--primary]=\"model.trigger.type === 'primary'\"\r\n  [class.sds-button--shadow]=\"model.trigger.shadow\"\r\n  [class.sds-button--small]=\"size === 'sm'\"\r\n  [sdsMenuTriggerFor]=\"menu\"\r\n>\r\n  <fa-icon\r\n    [fixedWidth]=\"true\"\r\n    [icon]=\"['sds', 'ellipsis']\"\r\n    transform=\"grow-5\"\r\n  ></fa-icon>\r\n  <span class=\"usa-sr-only\">Toggle Actions Menu</span>\r\n</button>\r\n\r\n<!-- Menu content -->\r\n<sds-menu\r\n  #menu=\"sdsMenu\"\r\n  [size]=\"size\"\r\n  xPosition=\"before\"\r\n  overlapTrigger=\"true\"\r\n>\r\n  <!-- Menu header (optional) -->\r\n  <sds-menu-header>Actions</sds-menu-header>\r\n  <!-- Menu items -->\r\n  <button\r\n    *ngFor=\"let button of model.actions\"\r\n    (click)=\"clicks.emit(button.id)\"\r\n    sds-menu-item\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</sds-menu>\r\n"
        },
        {
            "name": "SdsDrawerContentComponent",
            "id": "component-SdsDrawerContentComponent-90cd52c713c545293460891483e66bd8",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-drawer-content",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "drawer.content.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 54,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "drawerContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 51
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 52
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 55
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html'\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 52,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<ng-container *ngIf=\"drawerContentTemplate && isDrawerOpen\" [ngTemplateOutlet]=\"drawerContentTemplate\" >\r\n</ng-container>\r\n"
        },
        {
            "name": "SdsSubheaderActionsComponent",
            "id": "component-SdsSubheaderActionsComponent-90cd52c713c545293460891483e66bd8",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-actions",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-actions.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "line": 24
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 25,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html'\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 25
            },
            "templateData": "<!-- Actions Menu Trigger: Desktop -->\r\n<span class=\"display-none desktop-lg:display-inline-block\">\r\n  <button\r\n    class=\"sds-button sds-button--labeled-icon\"\r\n    [sdsMenuTriggerFor]=\"menu\"\r\n  >\r\n    Actions\r\n    <fa-layers [fixedWidth]=\"true\" size=\"lg\">\r\n      <fa-icon [icon]=\"['fas', 'circle']\"></fa-icon>\r\n      <fa-icon [icon]=\"['fas', 'ellipsis-v']\" transform=\"shrink-6\"></fa-icon>\r\n    </fa-layers>\r\n  </button>\r\n</span>\r\n\r\n<!-- Actions Menu Trigger: Tablet -->\r\n<span class=\"desktop-lg:display-none \">\r\n  <span class=\"display-none tablet-lg:display-inline-block\">\r\n    <button\r\n      class=\"sds-button sds-button--primary sds-button--circular\"\r\n      [sdsMenuTriggerFor]=\"menu\"\r\n    >\r\n      <fa-icon [fixedWidth]=\"true\" [icon]=\"['fas', 'ellipsis-v']\"></fa-icon>\r\n      <span class=\"usa-sr-only\">Toggle Actions Menu</span>\r\n    </button>\r\n  </span>\r\n</span>\r\n\r\n<!-- Actions Menu Trigger: Mobile -->\r\n<span class=\"tablet-lg:display-none\">\r\n  <button\r\n    *ngFor=\"let button of model.actions\"\r\n    (click)=\"clicks.emit(button.id)\"\r\n    class=\"sds-button sds-button--circular margin-top-05 tablet:margin-top-0\"\r\n  >\r\n    <fa-icon [fixedWidth]=\"true\" [icon]=\"['sds', button.icon]\"></fa-icon>\r\n  </button>\r\n</span>\r\n\r\n<!-- Menu content -->\r\n<sds-menu #menu=\"sdsMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n  <!-- Menu header (optional) -->\r\n  <sds-menu-header>Actions</sds-menu-header>\r\n  <!-- Menu items -->\r\n  <button\r\n    *ngFor=\"let button of model.actions\"\r\n    (click)=\"clicks.emit(button.id)\"\r\n    sds-menu-item\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</sds-menu>\r\n"
        },
        {
            "name": "SdsSubheaderComponent",
            "id": "component-SdsSubheaderComponent-90cd52c713c545293460891483e66bd8",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html'\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 15
            },
            "templateData": "<div class=\"sds-navbar border-bottom border-base-lighter\">\r\n  <div class=\"sds-navbar__content\">\r\n    <div class=\"grid-row\">\r\n      <div\r\n        class=\"grid-col-12 tablet-lg:grid-col-auto display-flex flex-align-center margin-bottom-1 tablet-lg:margin-bottom-0\"\r\n      >\r\n        <ng-content></ng-content>\r\n      </div>\r\n      <div class=\"grid-col-12 tablet-lg:grid-col-fill display-flex\">\r\n        <div class=\"tablet-lg:order-1\">\r\n          <!-- Buttons -->\r\n          <ng-content select=\"[subheader-buttons-container]\"></ng-content>\r\n        </div>\r\n        <div class=\"flex-fill\">\r\n          <!-- Search -->\r\n          <div class=\"margin-x-105 margin-top-05 tablet:margin-top-0\">\r\n            <ng-content select=\"sds-search\"></ng-content>\r\n          </div>\r\n        </div>\r\n        <div class=\"tablet-lg:order-2 margin-left-2\">\r\n          <!-- Actions Menu Trigger -->\r\n          <ng-content select=\"sds-subheader-actions\"></ng-content>\r\n\r\n          <!-- Drawer Trigger -->\r\n          <ng-content select=\"sds-subheader-drawer\"></ng-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- =============== DRAWER CONTENT =============== -->\r\n<sds-drawer-content></sds-drawer-content>\r\n"
        },
        {
            "name": "SdsSubheaderDrawerComponent",
            "id": "component-SdsSubheaderDrawerComponent-90cd52c713c545293460891483e66bd8",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-drawer",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-drawer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "drawerContentTemplate",
                    "line": 34,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "line": 35,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 38,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 36
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                },
                {
                    "name": "onDrawerOpenClose",
                    "args": [
                        {
                            "name": "ev",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 39,
                    "jsdoctags": [
                        {
                            "name": "ev",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  OnInit,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  TemplateRef\r\n} from '@angular/core';\r\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\r\n\r\n@Component({\r\n  selector: 'sds-subheader',\r\n  templateUrl: 'subheader.component.html'\r\n})\r\nexport class SdsSubheaderComponent {\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-actions',\r\n  templateUrl: 'subheader-actions.component.html'\r\n})\r\nexport class SdsSubheaderActionsComponent {\r\n  @Input() model;\r\n  @Output() clicks = new EventEmitter<string>();\r\n  constructor() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-subheader-drawer',\r\n  templateUrl: 'subheader-drawer.component.html'\r\n})\r\nexport class SdsSubheaderDrawerComponent implements OnInit {\r\n  @Input() drawerContentTemplate: TemplateRef<any>;\r\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\r\n  isOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  onDrawerOpenClose(ev) {\r\n    this.isOpen = !this.isOpen;\r\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\r\n  }\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-drawer-content',\r\n  templateUrl: 'drawer.content.component.html'\r\n})\r\nexport class SdsDrawerContentComponent implements OnInit {\r\n  drawerContentTemplate: TemplateRef<any>;\r\n  isDrawerOpen = false;\r\n\r\n  constructor(public data: SdsDrawerCommunicationService) {}\r\n  ngOnInit() {\r\n    this.data.contentTemplate.subscribe(\r\n      template => (this.drawerContentTemplate = template)\r\n    );\r\n    this.data.isDrawerOpen.subscribe(open => (this.isDrawerOpen = open));\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService"
                    }
                ],
                "line": 36,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<button\r\n  (click)=\"onDrawerOpenClose($event)\"\r\n  class=\"sds-button sds-button--circular margin-top-2px tablet:margin-top-0\"\r\n>\r\n  <fa-icon\r\n    [fixedWidth]=\"true\"\r\n    [icon]=\"isOpen ? ['fas', 'arrow-up'] : ['fas', 'arrow-down']\"\r\n  ></fa-icon>\r\n</button>\r\n"
        },
        {
            "name": "SearchListLayoutComponent",
            "id": "component-SearchListLayoutComponent-4148398055d72c8a84a4d12f5f3332f8",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/search-list-layout.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "search-list-layout",
            "styleUrls": [
                "./search-list-layout.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-list-layout.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>configuration</p>\n",
                    "line": 30,
                    "type": "SearchListConfiguration"
                },
                {
                    "name": "service",
                    "description": "<p>Input service to be called when items change</p>\n",
                    "line": 24,
                    "type": "SearchListInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "bottom",
                    "defaultValue": "{ id: 'bottomPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the bottom pagination control</p>\n",
                    "line": 89
                },
                {
                    "name": "filterData",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "items",
                    "defaultValue": "[]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>List of items to be displayed</p>\n",
                    "line": 99
                },
                {
                    "name": "page",
                    "defaultValue": "{\r\n    pageNumber: 1,\r\n    pageSize: 25,\r\n    totalPages: 0\r\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 57
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 94,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 16,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                },
                {
                    "name": "sortField",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort value </p>\n",
                    "line": 104,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "top",
                    "defaultValue": "{ id: 'topPagination' }",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the top pagination control</p>\n",
                    "line": 84
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "updateContent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 109,
                    "description": "<p>calls service when updated</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "updateFilter",
                    "args": [
                        {
                            "name": "filter",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 67,
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1757,
                                "end": 1763,
                                "flags": 0,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "tagName": {
                                "pos": 1751,
                                "end": 1756,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit, Input, ContentChild, TemplateRef, Optional } from '@angular/core';\r\nimport { BehaviorSubject } from \"rxjs\";\r\nimport { SearchListInterface, SearchListConfiguration } from './model/search-list-layout.model';\r\nimport { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';\r\n\r\n@Component({\r\n  selector: 'search-list-layout',\r\n  templateUrl: './search-list-layout.component.html',\r\n  styleUrls: ['./search-list-layout.component.scss']\r\n})\r\nexport class SearchListLayoutComponent implements OnInit {\r\n\r\n  /**\r\n  * Child Template to be used to display the data for each item in the list of items\r\n  */\r\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\r\n\r\n  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService) { }\r\n\r\n  /**\r\n   * Input service to be called when items change\r\n   */\r\n  @Input()\r\n  service: SearchListInterface;\r\n\r\n  /**\r\n   * configuration\r\n   */\r\n  @Input()\r\n  configuration: SearchListConfiguration;\r\n\r\n  /**\r\n   * Filter information\r\n   */\r\n  private filterData: any;\r\n\r\n  ngOnInit() {\r\n    this.page.pageSize = this.configuration.pageSize;\r\n    this.sortField = this.configuration.defaultSortValue;\r\n    this.paginationChange.subscribe(\r\n      () => {\r\n        this.updateContent();\r\n      }\r\n    );\r\n    if (this.formlyUpdateComunicationService) {\r\n      this.formlyUpdateComunicationService.filterUpdate.subscribe(\r\n        (filter) => {\r\n          this.updateFilter(filter);\r\n        }\r\n      )\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Default Page setttings\r\n   */\r\n  page = {\r\n    pageNumber: 1,\r\n    pageSize: 25,\r\n    totalPages: 0\r\n  }\r\n\r\n  /**\r\n   * updates the filter and set the page number to 1 and calls imported service\r\n   * @param filter \r\n   */\r\n  public updateFilter(filter: any) {\r\n    this.filterData = filter;\r\n    this.page.pageNumber = 1;\r\n    this.updateContent();\r\n  }\r\n\r\n  /**\r\n   * Sorty by change event\r\n   */\r\n  onSelectChange() {\r\n    this.page.pageNumber = 1;\r\n    this.updateContent();\r\n  }\r\n\r\n  /**\r\n   * Id of the top pagination control\r\n   */\r\n  top = { id: 'topPagination' };\r\n\r\n  /**\r\n   * Id of the bottom pagination control\r\n   */\r\n  bottom = { id: 'bottomPagination' };\r\n\r\n  /**\r\n   * Page event listener\r\n   */\r\n  public paginationChange = new BehaviorSubject<object>(this.page);\r\n\r\n  /**\r\n   * List of items to be displayed\r\n   */\r\n  items = [];\r\n\r\n  /**\r\n   * sort value \r\n   */\r\n  public sortField = '';\r\n\r\n  /**\r\n   * calls service when updated\r\n   */\r\n  private updateContent() {\r\n    this.service.getData({ 'page': this.page, sortField: this.sortField, filter: this.filterData }).subscribe(\r\n      (result) => {\r\n        this.items = result.items;\r\n        this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);\r\n      }\r\n    );\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-list-layout.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService"
                    }
                ],
                "line": 16,
                "jsdoctags": [
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\r\n  <div class=\"grid-col\">\r\n    <div class=\"grid-row\">\r\n      <div class=\"grid-col-auto\">\r\n        <sds-pagination class=\"tablet:grid-col\" [paginationConfiguration]=\"top\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\">\r\n        </sds-pagination>\r\n      </div>\r\n      <div class=\"grid-col-fill\"></div>\r\n      <div class=\"grid-col-auto float-right\">\r\n        <div class=\"margin-left-1\">\r\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\r\n            Sort by\r\n          </label>\r\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\" class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\r\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\r\n              {{ item.text }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"grid-row\">\r\n  <div class=\"grid-col-12\">\r\n    <sds-search-result-list [model]=\"items\">\r\n      <ng-template #resultContent let-item>\r\n        <ng-container *ngTemplateOutlet=\"resultContentTemplate,\r\n                context: { $implicit: item }\"></ng-container>\r\n      </ng-template>\r\n    </sds-search-result-list>\r\n    <sds-pagination *ngIf=\"items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\">\r\n    </sds-pagination>\r\n  </div>\r\n</div>\r\n"
        }
    ],
    "modules": [
        {
            "name": "PackagesLayoutsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsActionsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsActionsMenuComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsActionsMenuComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsSubheaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDrawerCommunicationService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsActionsMenuModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SearchListServiceModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SearchListLayoutComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SearchListLayoutComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/layouts/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/layouts/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/layouts/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default LAYOUTS;