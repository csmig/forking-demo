/* 
$Id: overrides.js 807 2017-07-27 13:04:19Z csmig $
*/


// custom Vtype for vtype:'IPAddress'
Ext.apply(Ext.form.VTypes, {
    IPAddress:  function(v) {
        //return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v);
		return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(v);
    },
    IPAddressText: 'Must be an IP address (n.n.n.n)',
    IPAddressMask: /[\d\.]/i
});

// Asterisk for required form fields
Ext.override(Ext.layout.FormLayout, {
    getTemplateArgs: function(field) {
        var noLabelSep = !field.fieldLabel || field.hideLabel;
        var labelSep = (typeof field.labelSeparator == 'undefined' ? this.labelSeparator : field.labelSeparator);
        if (!field.allowBlank) labelSep += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
        return {
            id: field.id,
            label: field.fieldLabel,
            labelStyle: field.labelStyle||this.labelStyle||'',
            elementStyle: this.elementStyle||'',
            labelSeparator: noLabelSep ? '' : labelSep,
            itemCls: (field.itemCls||this.container.itemCls||'') + (field.hideLabel ? ' x-hide-label' : ''),
            clearCls: field.clearCls || 'x-form-clear-left'
        };
    }
});

Ext.override(Ext.TabPanel, {
	idDelimiter: "!!"
});

// Grid hold position
Ext.override(Ext.grid.GridView, {
   // holdPosition: false,
    onLoad : function(){
        if (!this.holdPosition) this.scrollToTop();
        //this.holdPosition = false
    }
});

// Two overrides below keep the backscape in a readOnly text field from causing the browser to go back in history
Ext.override(Ext.form.TextField, {
	enableKeyEvents : true,
	onKeyDown: function(e) {
		if ((this.readOnly == true || this.editable == false) && e.getCharCode() == e.BACKSPACE) {
			e.preventDefault();
		}
		this.fireEvent('keydown', this, e);
	}
});
Ext.override(Ext.form.TextArea, {
	enableKeyEvents : true,
	onKeyDown: function(e) {
		if ((this.readOnly == true || this.editable == false) && e.getCharCode() == e.BACKSPACE) {
			e.preventDefault();
		}
		this.fireEvent('keydown', this, e);
	}
});

// Useful override for clearing the dirty flag for all form fields
Ext.override(Ext.form.BasicForm, {
    clearDirty: function() {
        var i, it = this.items.items, l = it.length, c;
        for (i = 0; i < l; i++) {
            c = it[i];
            c.originalValue = String(c.getValue());
            if(c.xtype == "compositefield") {
                var j, jt = c.items.items, ljt = jt.length, d;
                for (j = 0; j < ljt; j++) {
                    d = jt[j];
                    d.originalValue = String(d.getValue());
                }            	
            }
        }
    }
});

// START WEBKIT FIX
if (!Ext.isDefined(Ext.webKitVersion)) {
    Ext.webKitVersion = Ext.isWebKit ? parseFloat(/AppleWebKit\/([\d.]+)/.exec(navigator.userAgent)[1], 10) : NaN;
}
/*
 * Box-sizing was changed beginning with Chrome v19.  For background information, see:
 * http://code.google.com/p/chromium/issues/detail?id=124816
 * https://bugs.webkit.org/show_bug.cgi?id=78412
 * https://bugs.webkit.org/show_bug.cgi?id=87536
 * http://www.sencha.com/forum/showthread.php?198124-Grids-are-rendered-differently-in-upcoming-versions-of-Google-Chrome&p=824367
 *
 * */
if (Ext.isWebKit && Ext.webKitVersion >= 535.2) { // probably not the exact version, but the issues started appearing in chromium 19
    Ext.override(Ext.grid.ColumnModel, {
        getTotalWidth: function (includeHidden) {
            if (!this.totalWidth) {
                var boxsizeadj = 2;
                this.totalWidth = 0;
                for (var i = 0, len = this.config.length; i < len; i++) {
                    if (includeHidden || !this.isHidden(i)) {
                        this.totalWidth += (this.getColumnWidth(i) + boxsizeadj);
                    }
                }
            }
            return this.totalWidth;
        }
    });


    Ext.onReady(function() {
        Ext.get(document.body).addClass('ext-chrome-fixes');
        Ext.util.CSS.createStyleSheet('@media screen and (-webkit-min-device-pixel-ratio:0) {.x-grid3-cell{box-sizing: border-box !important;}}', 'chrome-fixes-box-sizing');
    });
}
// END WEB KIT FIX

// START Border layout with percentages
Ext.override(Ext.layout.BorderLayout, {
 onLayout : function(ct, target){
  var collapsed;
  var size = target.getViewSize(), w = size.width, h = size.height;
  if(!this.rendered){
   target.position();
   target.addClass('x-border-layout-ct');
   collapsed = [];
   var items = ct.items.items;
   for(var i = 0, len = items.length; i < len; i++) {
    var c = items[i];
    var pos = c.region;
    if(c.collapsed){
     collapsed.push(c);
    }
    c.collapsed = false;
    var r = this[pos] = pos != 'center' && c.split ?
     new Ext.layout.BorderLayout.SplitRegion(this, c.initialConfig, pos) :
     new Ext.layout.BorderLayout.Region(this, c.initialConfig, pos);
    if(pos == 'north' || pos == 'south'){
     if(typeof c.height == 'string' && c.relHeight === undefined){
      var p = c.height.match(/(\d+)%/);
      if(p[1]){
       c.relHeight = parseInt(p[1], 10) * .01;
      }
     }
     if(c.relHeight !== undefined){
      if(typeof c.relHeight != 'number'){
       c.relHeight = parseFloat(c.relHeight);
      }
      c.height = h * c.relHeight;
     }
     r.minSize = r.minSize || r.minHeight;
     r.maxSize = r.maxSize || r.maxHeight;
    } else if(pos == 'east' || pos == 'west'){
     if(typeof c.width == 'string' && c.relWidth === undefined){
      var p = c.width.match(/(\d+)%/);
      if(p[1]){
       c.relWidth = parseInt(p[1], 10) * .01;
      }
     }
     if(c.relWidth !== undefined){
      if(typeof c.relWidth != 'number'){
       c.relWidth = parseFloat(c.relWidth);
      }
      c.width = w * c.relWidth;
     }
     r.minSize = r.minSize || r.minWidth;
     r.maxSize = r.maxSize || r.maxWidth;
    }
    if(!c.rendered){
     c.cls = c.cls ? c.cls +' x-border-panel' : 'x-border-panel';
     c.render(target, i);
    }
    r.render(target, c);
   }
   this.rendered = true;
  }
  if(w < 20 || h < 20){
   if(collapsed){
    this.restoreCollapsed = collapsed;
   }
   return;
  }else if(this.restoreCollapsed){
   collapsed = this.restoreCollapsed;
   delete this.restoreCollapsed;
  }
  var centerW = w, centerH = h, centerY = 0, centerX = 0;
  var n = this.north, s = this.south, west = this.west, e = this.east, c = this.center;
  if(!c && Ext.layout.BorderLayout.WARN !== false){
   throw 'No center region defined in BorderLayout ' + ct.id;
  }
  if(n && n.isVisible()){
   var b = n.getSize();
   var m = n.getMargins();
   b.width = w - (m.left+m.right);
   if(n.panel.relHeight !== undefined){
    n.height = Math.round(h * n.panel.relHeight);
    b.height = n.minSize && n.height < n.minSize ? n.minSize :
     (n.maxSize && n.height > n.maxSize ? n.maxSize : n.height);
   }
   b.x = m.left;
   b.y = m.top;
   centerY = b.height + b.y + m.bottom;
   centerH -= centerY;
   n.applyLayout(b);
  }
  if(s && s.isVisible()){
   var b = s.getSize();
   var m = s.getMargins();
   b.width = w - (m.left+m.right);
   if(s.panel.relHeight !== undefined){
    s.height = Math.round(h * s.panel.relHeight);
    b.height = s.minSize && s.height < s.minSize ? s.minSize :
     (s.maxSize && s.height > s.maxSize ? s.maxSize : s.height);
   }
   b.x = m.left;
   var totalHeight = (b.height + m.top + m.bottom);
   b.y = h - totalHeight + m.top;
   centerH -= totalHeight;
   s.applyLayout(b);
  }
  if(west && west.isVisible()){
   var b = west.getSize();
   var m = west.getMargins();
   b.height = centerH - (m.top+m.bottom);
   if(west.panel.relWidth !== undefined){
    west.width = Math.round(w * west.panel.relWidth);
    b.width = west.minSize && west.width < west.minSize ? west.minSize :
     (west.maxSize && west.width > west.maxSize ? west.maxSize : west.width);
   }
   b.x = m.left;
   b.y = centerY + m.top;
   var totalWidth = (b.width + m.left + m.right);
   centerX += totalWidth;
   centerW -= totalWidth;
   west.applyLayout(b);
  }
  if(e && e.isVisible()){
   var b = e.getSize();
   var m = e.getMargins();
   b.height = centerH - (m.top+m.bottom);
   if(e.panel.relWidth !== undefined){
    e.width = Math.round(w * e.panel.relWidth);
    b.width = e.minSize && e.width < e.minSize ? e.minSize :
     (e.maxSize && e.width > e.maxSize ? e.maxSize : e.width);
   }
   var totalWidth = (b.width + m.left + m.right);
   b.x = w - totalWidth + m.left;
   b.y = centerY + m.top;
   centerW -= totalWidth;
   e.applyLayout(b);
  }
  if(c){
   var m = c.getMargins();
   var centerBox = {
    x: centerX + m.left,
    y: centerY + m.top,
    width: centerW - (m.left+m.right),
    height: centerH - (m.top+m.bottom)
   };
   c.applyLayout(centerBox);
  }
  if(collapsed){
   for(var i = 0, len = collapsed.length; i < len; i++){
    collapsed[i].collapse(false);
   }
  }
  if(Ext.isIE && Ext.isStrict){
   target.repaint();
  }
 }
});
Ext.override(Ext.layout.BorderLayout.SplitRegion, {
 onSplitMove : function(split, newSize){
  var s = this.panel.getSize();
  this.lastSplitSize = newSize;
  if(this.position == 'north' || this.position == 'south'){
   this.panel.setSize(s.width, newSize);
   if(this.panel.relHeight !== undefined){
    this.state.relHeight = this.panel.relHeight *= newSize / this.height;
   }else{
    this.state.height = newSize;
   }
  }else{
   this.panel.setSize(newSize, s.height);
   if(this.panel.relWidth !== undefined){
    this.state.relWidth = this.panel.relWidth *= newSize / this.width;
   }else{
    this.state.width = newSize;
   }
  }
  this.layout.layout();
  this.panel.saveState();
  return false;
 }
}); 
// END Border layout with percentages


// START enable comboBox setValue() to fire the select event
Ext.override(Ext.form.ComboBox, {
    setValue : function(v, fireSelect){
        var text = v;
        if(this.valueField){
            var r = this.findRecord(this.valueField, v);
            if(r){
                text = r.data[this.displayField];
                if (fireSelect) {
					var index = this.store.indexOf(r);
					this.selectedIndex = index;
                    this.fireEvent('select', this, r, index);
                }
            }else if(Ext.isDefined(this.valueNotFoundText)){
                text = this.valueNotFoundText;
            }
        }
        this.lastSelectionText = text;
        if(this.hiddenField){
            this.hiddenField.value = v;
        }
        Ext.form.ComboBox.superclass.setValue.call(this, text);
        this.value = v;
        return this;
    }
});
// END enable comboBox setValue() to fire the select event

Ext.override(Ext.grid.RowSelectionModel, {
    handleMouseDown : function(g, rowIndex, e){
        if(e.button !== 0 || this.isLocked()){
            return;
        }
        var view = this.grid.getView();
        if(e.shiftKey && !this.singleSelect && this.last !== false){
            var last = this.last;
            this.selectRange(last, rowIndex, e.ctrlKey || e.shiftKey); //csmig added || e.shiftKey 
            this.last = last; // reset the last
            view.focusRow(rowIndex);
        }else{
            var isSelected = this.isSelected(rowIndex);
            if(e.ctrlKey && isSelected){
                this.deselectRow(rowIndex);
            }else if(!isSelected || this.getCount() > 1){
                this.selectRow(rowIndex, e.ctrlKey || e.shiftKey);
                view.focusRow(rowIndex);
            }
        }
    }
});

// Add support for dismissDelay in QuickTip markup
Ext.override(Ext.QuickTip, {
	//dismissDelay: 0,
    tagConfig : {
        namespace : "ext",
        attribute : "qtip",
        width : "qwidth",
        target : "target",
        title : "qtitle",
        hide : "hide",
        cls : "qclass",
        align : "qalign",
        anchor : "anchor",
        dismissDelay : "qdmdelay",
   },
    onTargetOver : function(e){
        if(this.disabled){
            return;
        }
        this.targetXY = e.getXY();
        var t = e.getTarget();
        if(!t || t.nodeType !== 1 || t == document || t == document.body){
            return;
        }
        if(this.activeTarget && ((t == this.activeTarget.el) || Ext.fly(this.activeTarget.el).contains(t))){
            this.clearTimer('hide');
            this.show();
            return;
        }
        if(t && this.targets[t.id]){
            this.activeTarget = this.targets[t.id];
            this.activeTarget.el = t;
            this.anchor = this.activeTarget.anchor;
            if(this.anchor){
                this.anchorTarget = t;
            }
            this.delayShow();
            return;
        }
        var ttp, et = Ext.fly(t), cfg = this.tagConfig, ns = cfg.namespace;
        if(ttp = this.getTipCfg(e)){
            var autoHide = et.getAttribute(cfg.hide, ns);
            this.activeTarget = {
                el: t,
                text: ttp,
                width: et.getAttribute(cfg.width, ns),
                autoHide: autoHide != "user" && autoHide !== 'false',
                title: et.getAttribute(cfg.title, ns),
                cls: et.getAttribute(cfg.cls, ns),
                align: et.getAttribute(cfg.align, ns)
                ,dismissDelay: parseInt(et.getAttribute(cfg.dismissDelay, ns),10) 
            };
            this.anchor = et.getAttribute(cfg.anchor, ns);
            if(this.anchor){
                this.anchorTarget = t;
            }
            this.delayShow();
        }
    }
});