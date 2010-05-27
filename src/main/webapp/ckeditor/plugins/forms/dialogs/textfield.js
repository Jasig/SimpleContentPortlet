/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('textfield',function(a){var b={value:1,size:1,maxLength:1},c={text:1,password:1};return{title:a.lang.textfield.title,minWidth:350,minHeight:150,onShow:function(){var e=this;delete e.textField;var d=e.getParentEditor().getSelection().getSelectedElement();if(d&&d.getName()=='input'&&(c[d.getAttribute('type')]||!d.getAttribute('type'))){e.textField=d;e.setupContent(d);}},onOk:function(){var d,e=this.textField,f=!e;if(f){d=this.getParentEditor();e=d.document.createElement('input');e.setAttribute('type','text');}if(f)d.insertElement(e);this.commitContent({element:e});},onLoad:function(){var d=function(f){var g=f.hasAttribute(this.id)&&f.getAttribute(this.id);this.setValue(g||'');},e=function(f){var g=f.element,h=this.getValue();if(h)g.setAttribute(this.id,h);else g.removeAttribute(this.id);};this.foreach(function(f){if(b[f.id]){f.setup=d;f.commit=e;}});},contents:[{id:'info',label:a.lang.textfield.title,title:a.lang.textfield.title,elements:[{type:'hbox',widths:['50%','50%'],children:[{id:'_cke_saved_name',type:'text',label:a.lang.textfield.name,'default':'',accessKey:'N',setup:function(d){this.setValue(d.getAttribute('_cke_saved_name')||d.getAttribute('name')||'');},commit:function(d){var e=d.element;if(this.getValue())e.setAttribute('_cke_saved_name',this.getValue());else{e.removeAttribute('_cke_saved_name');e.removeAttribute('name');}}},{id:'value',type:'text',label:a.lang.textfield.value,'default':'',accessKey:'V'}]},{type:'hbox',widths:['50%','50%'],children:[{id:'size',type:'text',label:a.lang.textfield.charWidth,'default':'',accessKey:'C',style:'width:50px',validate:CKEDITOR.dialog.validate.integer(a.lang.common.validateNumberFailed)},{id:'maxLength',type:'text',label:a.lang.textfield.maxChars,'default':'',accessKey:'M',style:'width:50px',validate:CKEDITOR.dialog.validate.integer(a.lang.common.validateNumberFailed)}]},{id:'type',type:'select',label:a.lang.textfield.type,'default':'text',accessKey:'M',items:[[a.lang.textfield.typeText,'text'],[a.lang.textfield.typePass,'password']],setup:function(d){this.setValue(d.getAttribute('type'));},commit:function(d){var e=d.element;if(CKEDITOR.env.ie){var f=e.getAttribute('type'),g=this.getValue();if(f!=g){var h=CKEDITOR.dom.element.createFromHtml('<input type="'+g+'"></input>',a.document);e.copyAttributes(h,{type:1});h.replace(e);a.getSelection().selectElement(h);d.element=h;}}else e.setAttribute('type',this.getValue());}}]}]};});