(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{324:function(e,t,i){"use strict";i.r(t);var r=i(29),a=i.n(r),n=i(114),s=i(24),f=i(45),u=i(9),d=i(987);i(988);t.default=function(e){e.abilities[28]=[{triggerFunc:function(){return this.isUpgraded()?"onStartPhase onDamage":"onStartPhase"},_defenseBuff:0,_maxDefenseBuff:40,_damageTaken:!1,_getDefenseBuff:function(e){return this._defenseBuff>=39?this._defenseBuff=40:this.isUpgraded()&&!this._damageTaken?this._defenseBuff+=2:this._defenseBuff+=1,this._defenseBuff},require:function(e){return!e||(this._damageTaken=!0,!1)},activate:function(){this.creature.replaceEffect(new d.a("Tankish Build",this.creature,this.creature,"",{alterations:{defense:this._getDefenseBuff(this._defenseBuff)},stackable:!1},e)),this._damageTaken=!1}},{trigger:"onQuery",_targetTeam:s.a.enemy,_upgradedMap:[[0,1,0,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,1,0,1,0,0,0],[1,1,1,0,0,1,1,1],[0,0,1,0,1,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,1,0,0]],require:function(){var e={team:this._targetTeam,sourceCreature:this.creature,distance:3};return!(!this.testRequirements()||!this.testDirection(e))},query:function(){var t=this.creature,i=this;this.isUpgraded()?(this._upgradedMap.origin=[3,3],e.grid.queryCreature({fnOnConfirm:function(){i.animation.apply(i,arguments)},team:this._targetTeam,id:t.id,flipped:t.flipped,hexes:t.getHexMap(this._upgradedMap)})):e.grid.queryDirection({fnOnConfirm:function(){i.animation.apply(i,arguments)},flipped:t.flipped,team:this._targetTeam,id:t.id,requireCreature:!0,x:t.x,y:t.y,distance:3,sourceCreature:t})},activate:function(t){this.end(),this.isUpgraded()||(t=u.e(t).creature);var i=new n.a(this.creature,this.damages,1,[],e);t.takeDamage(i)}},{trigger:"onQuery",_req:{team:s.a.both,directions:[0,1,0,0,1,0],distance:1},_directions:[0,0,0,0,0,0],_getDashed:function(t){var i,r=this.creature;if(t[4])if(t[1]){var a=e.grid.getHexMap(r.x,r.y,0,r.player.flipped,f.r),n=e.grid.getHexMap(r.x,r.y,0,!r.player.flipped,f.r);i=a.concat(n)}else i=e.grid.getHexMap(r.x,r.y,0,!r.player.flipped,f.r);else i=e.grid.getHexMap(r.x,r.y,0,r.player.flipped,f.r);return i},_getTarget:function(t){var i=this.creature,r=i.player.flipped?i.x-2:i.x+1,n=i.player.flipped?i.x+1:i.x-2,s=[];return t[4]?t[1]?(s.push.apply(s,a()(this._getCreature(e.grid.getHexLine(r,i.y,1,i.player.flipped)))),s.push.apply(s,a()(this._getCreature(e.grid.getHexLine(n,i.y,4,i.player.flipped))))):s.push.apply(s,a()(this._getCreature(e.grid.getHexLine(n,i.y,4,i.player.flipped)))):s.push.apply(s,a()(this._getCreature(e.grid.getHexLine(r,i.y,1,i.player.flipped)))),s},_getCreature:function(t){for(var i=[],r=0,a=0;r<t.length&&a<2;){var n=t[r].creature;if(void 0!==n){for(var s=0;s<n.size;s++)i.push(e.grid.hexes[n.y][n.x-s]);r+=n.size,a=0}else r++,a++}return i},_checkEnd:function(){var t,i=this.creature,r=this.testDirections(this._req);this._directions=[0,0,0,0,0,0];var a=i.player.flipped?i.x-2:i.x+1,n=i.player.flipped?i.x+1:i.x-2;if(r[4])if(r[1]){var s=e.grid.getHexLine(a,i.y,1,i.player.flipped),f=e.grid.getHexLine(n,i.y,4,i.player.flipped);this._getHole(s)&&(this._directions[1]=1),this._getHole(f)&&(this._directions[4]=1)}else t=e.grid.getHexLine(n,i.y,4,i.player.flipped),this._getHole(t)&&(this._directions=r);else t=e.grid.getHexLine(a,i.y,1,i.player.flipped),this._getHole(t)&&(this._directions=r)},_getHole:function(e){for(var t=0,i=0;t<e.length&&i<2;)void 0===e[t].creature?i++:i=0,t++;return i>=2},require:function(){return this._req.sourceCreature=this.creature,this._checkEnd(),!(!this.testRequirements()||!this._directions[1]&&!this._directions[4])},query:function(){var t=this,i=this.creature,r=t._directions,a=t._getDashed(r),n=t._getTarget(r),f=[];r[1]&&r[4]&&(f=n.filter((function(e){return e.x<i.x}))).forEach((function(e){n.splice(n.findIndex((function(t){return t.coord===e.coord})),1)})),e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:s.a.both,requireCreature:0,id:i.id,flipped:i.flipped,choices:[n,f],hexesDashed:a})},activate:function(t){var i=this,r=this.creature,a=0;i.end();var s=i.getTargets(t),f=s[s.length-1].target,u=null;for(console.log(s),a=0;a<s.length;a++){for(var d=s[a].target,c=new n.a(i.creature,i.damages,1,[],e),o=0;o<d.size&&(d.takeDamage(c),!0!==d.dead);o++);if(!i.isUpgraded()&&!0===d.dead&&(d.size>1||void 0===e.grid.hexes[d.y][d.x-1].creature||void 0===e.grid.hexes[d.y][d.x+1].creature)){a>0?f=s[a-1].target:(f=d,u=0);break}}null===u&&(u=f.x>=r.x?2:-f.size),i.creature.moveTo(e.grid.hexes[r.y][f.x+u],{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.Phaser.camera.shake(.02,100,!0,e.Phaser.camera.SHAKE_VERTICAL,!0),e.onStepIn(i.creature,i.creature.hexagons[0]);var t=setInterval((function(){e.freezedInput||(clearInterval(t),e.UI.selectAbility(-1),e.activeCreature.queryMove())}),100)}})}},{trigger:"onQuery",map:[[0,0,1,0],[0,0,1,1],[0,1,1,0],[0,0,1,1],[0,0,1,0]],require:function(){return this.testRequirements()},query:function(){var t=this,i=this.creature;this.map.origin=[0,2],e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:s.a.both,requireCreature:0,id:i.id,flipped:i.flipped,choices:[i.getHexMap(this.map),i.getHexMap(this.map,!0)]})},activate:function(t){var i=this,r=this;r.end();for(var a=r.getTargets(t),n=function(t){var n=a[t].target;r.isUpgraded()&&(n.delayed||n.findEffect("Earth Shaker").length>0)?(n.status.dizzy=!0,n.removeEffect("Earth Shaker")):(n.delay(!1),n.addEffect(new d.a("Earth Shaker",i.creature,n,"onStartPhase",{effectFn:function(){n.delayed=!0,n.delayable=!1},deleteTrigger:"onEndPhase",turnLifetime:1,stackable:!1},e)))},s=0;s<a.length;s++)n(s)}}]}},987:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(3),a=i.n(r),n=i(4),s=i.n(n),f=i(0),u=i(5),d=function(){function e(t,i,r,n,s,u){a()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=i,this.target=r,this.trigger=n,this.creationTurn=u.turn;var d=f.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);f.extend(this,d),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()},988:function(e,t,i){"use strict";function r(e,t,i){var r;return t>1&&(t=1),t<-1&&(t=-1),0===i?r=1===t?1:4:(e%2==0&&t<1&&t++,r=1===t?-1===i?0:2:1===i?3:5),r}i.d(t,"a",(function(){return r}))}}]);