(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{321:function(e,t,r){"use strict";r.r(t);var a=r(39),i=r.n(a),n=r(0),s=r(114),c=r(29),o=r(45),u=r(11),h=(r(5),r(987)),d=r(28);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){e.abilities[40]=[{trigger:"onEndPhase",require:function(){return!0},activate:function(){var t=this,r=new h.a(this.title,this.creature,this.creature,"",{alterations:{moveable:!1},deleteTrigger:"onStartPhase",turnLifetime:1},e),a=new h.a("",this.creature,this.creature,"onUnderAttack",{effectFn:function(){return t._activateOnAttacker.apply(t,arguments)},deleteTrigger:"onStartPhase",turnLifetime:1},e);this.creature.addEffect(r),this.creature.addEffect(a),this.end(!0)},_activateOnAttacker:function(t,r){if(void 0===r||!r.melee||r.isFromTrap)return!1;var a={alterations:{moveable:!1},deleteTrigger:"onEndPhase",turnLifetime:1,creationTurn:e.turn-1,deleteOnOwnerDeath:!0,stackable:!1};this.isUpgraded()&&(a.alterations.reqEnergy=5);var i=new h.a(this.title,this.creature,r.attacker,"",a,e);r.attacker.addEffect(i,"%CreatureName".concat(i.target.id,"% has been grasped by tentacles")),r.attacker===e.activeCreature&&r.attacker.queryMove()}},{trigger:"onQuery",_targetTeam:c.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(o.j),{team:this._targetTeam})},query:function(){var t=this;if(this.isUpgraded()){var r=[this.creature.getHexMap(o.i),this.creature.getHexMap(o.a)];e.grid.queryChoice({fnOnSelect:function(t,r){e.activeCreature.faceHex(r.hex,void 0,!0),r.hex.overlayVisualState("creature selected player"+e.activeCreature.team)},fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,choices:r})}else e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(o.j)})},activate:function(e,t){if(this.end(),this.isUpgraded()){var r,a=0===t.choiceIndex,i=e.map((function(e){return e.y})),n=Math.min.apply(null,i),s=Math.max.apply(null,i);r=a?t.hex.y!==s:t.hex.y===n,e.sort((function(e,t){return r?e.y-t.y:t.y-e.y}));for(var o=0;o<e.length;o++){var u=e[o].creature;u&&Object(c.b)(this.creature,u,this._targetTeam)&&this._activateOnTarget(u)}}else this._activateOnTarget(e)},_activateOnTarget:function(t){var r=this,a=new h.a("Hammered",this.creature,t,"onStepOut",{effectFn:function(t){var a=this;this.game.signals.creature.add((function i(n,c){"movementComplete"===n&&c.creature.id===t.target.id&&(a.game.signals.creature.remove(i),t.target.takeDamage(new s.a(t.owner,{pierce:r.damages.pierce},1,[],e)),t.deleteEffect())}))}},e),i=new s.a(this.creature,this.damages,1,[a],e);t.takeDamage(i)}},{trigger:"onQuery",_directions:[0,1,0,0,1,0],_targetTeam:c.a.enemy,_maxPushDistance:1,_damagePerHexTravelled:1,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this._directions})},query:function(){var t=this,r={fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,requireCreature:!0,stopOnCreature:!0,id:this.creature.id,sourceCreature:this.creature,x:this.creature.x,y:this.creature.y,directions:this._directions,dashedHexesAfterCreatureStop:!1};this.isUpgraded()?(r=e.grid.getDirectionChoices(g({},r,{dashedHexesAfterCreatureStop:!0,dashedHexesDistance:this._maxPushDistance})),e.grid.queryChoice(g({},r,{requireCreature:!1}))):e.grid.queryDirection(r)},activate:function(t,r,a){var i,n,s,c=this,o=this.creature;c.end();for(var h=(null==a||null===(i=a.queryOptions)||void 0===i?void 0:i.hexesDashed)||[],f=0;f<t.length;f++)if(t[f].creature){s=t[f].creature,n=t.slice(0,f);break}if(n.length>0){var g=u.d(n);r.direction===d.a.Left&&(g=e.grid.hexes[g.y][g.x+o.size-1]),e.grid.cleanReachable();var l=o.player.flipped&&r.direction===d.a.Right||r.direction===d.a.Left;o.moveTo(g,{overrideSpeed:100,ignoreMovementPoint:!0,turnAroundOnComplete:!l,callback:function(){c._damage(s,n);var t=setInterval((function(){e.freezedInput||(clearInterval(t),c.isUpgraded()?c._pushTarget(s,h,r):e.activeCreature.queryMove())}),100)}})}else c._damage(s,n),c.isUpgraded()&&c._pushTarget(s,h,r)},_damage:function(t,r){var a={pierce:this.damages.pierce+r.length*this._damagePerHexTravelled},i=new s.a(this.creature,a,1,[],e);t.takeDamage(i)},_pushTarget:function(t,r,a){var i=this.creature;if(r.length)if(r.length>this._maxPushDistance)console.warn("Attempting to push target more (".concat(r.length,") than the supported distance (").concat(this._maxPushDistance,")"));else{var n=i.player.flipped&&a.direction===d.a.Right||!i.player.flipped&&a.direction===d.a.Left,s=i.getHexMap(o.p,n),c=r.slice();u.b(c,!1,!1,i.id),u.b(c,!1,!1,t.id);var h=s[0],f=c[0];a.direction===d.a.Left&&(h=h&&e.grid.hexes[h.y][h.x+i.size-1],f=f&&e.grid.hexes[f.y][f.x+t.size-1]),this._pushMove(h,t,f)}},_pushMove:function(t,r,a){var i=this.creature,s=setInterval((function(){e.freezedInput||(clearInterval(s),e.activeCreature.queryMove(),e.grid.clearHexViewAlterations())}),100);if(!(i.dead||r&&r.dead||!i.stats.moveable||r&&!r.stats.moveable)){var c={overrideSpeed:500,ignorePath:!0,ignoreMovementPoint:!0,turnAroundOnComplete:!1};a&&r.moveTo(a,n.extend({animation:"push"},c)),i.moveTo(t,c)}}},{trigger:"onQuery",_targetTeam:c.a.enemy,require:function(){var e=this;return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(o.q),{team:this._targetTeam,optTest:function(t){return!!e.isUpgraded()||t.size<=2}})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(o.q),optTest:function(e){return!!t.isUpgraded()||e.size<=2}})},activate:function(t){var r=this.creature;this.end();var a=new s.a(r,this.damages,1,[],e),i=o.p,n=e.grid.getHexMap(r.x-i.origin[0],r.y-i.origin[1],0,!1,i)[0].creature==t,c=t.x+(n?0:r.size-t.size);r.moveTo(e.grid.hexes[t.y][c],{ignorePath:!0,ignoreMovementPoint:!0,callback:function(){r.updateHex(),r.queryMove()}});var u=r.x+(n?t.size-r.size:0);t.moveTo(e.grid.hexes[r.y][u],{ignorePath:!0,ignoreMovementPoint:!0,callback:function(){t.updateHex(),t.takeDamage(a)}})}}]}},987:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(3),i=r.n(a),n=r(4),s=r.n(n),c=r(0),o=r(5),u=function(){function e(t,r,a,n,s,o){i()(this,e),this.id=o.effectId++,this.game=o,this.name=t,this.owner=r,this.target=a,this.trigger=n,this.creationTurn=o.turn;var u=c.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);c.extend(this,u),o.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof o.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);