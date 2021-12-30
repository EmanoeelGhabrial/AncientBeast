(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{318:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a(114),n=a(29),s=a(45),o=a(11),u=a(5),c=a(987);t.default=function(e){e.abilities[5]=[{trigger:"onUnderAttack",require:function(){return!0},activate:function(t){if(void 0===t)return!1;if(!t.damages.shock)return!1;this.end();var a=Math.floor(t.damages.shock/4);t.damages.shock-=a;var r=a-(this.creature.stats.energy-this.creature.energy);return this.creature.recharge(a),this.isUpgraded()&&r>0&&this.creature.heal(r),e.log("%CreatureName"+this.creature.id+"% absorbs "+a+" shock damage into energy"),t}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:this._getHexes()})},activate:function(t){this.end();var a=r.extend({poison:0},this.damages1);this.isUpgraded()&&(a.poison=this.damages1.poison);var n=new i.a(this.creature,a,1,[],e),s=t.takeDamage(n);s.damages&&s.damages.total>0&&(this.creature.remainingMove=this.creature.stats.movement,e.log("%CreatureName"+this.creature.id+"%'s movement recharged"),e.activeCreature.queryMove())},_getHexes:function(){return e.grid.getHexMap(this.creature.x-3,this.creature.y-2,0,!1,s.k)}},{trigger:"onQuery",_targetTeam:n.a.enemy,require:function(){return!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})&&this.testRequirements()},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:this._getHexes()})},activate:function(t){var a=this;this.end();var r=this.damages,n=this.isUpgraded()?0:1,s=this;t.addEffect(new c.a(s.title,t,t,"onUnderAttack",{effectFn:function(e,a){a.applyDamage().total>=t.health&&t.hexagons.forEach((function(e){e.destroyTrap()}))}},e));var o=new c.a(s.title,s.creature,this,"onStepOut",{effectFn:function(n){a.game.signals.creature.add((function s(o,u){"movementComplete"===o&&u.creature.id===n.target.id&&(a.game.signals.creature.remove(s),e.log("%CreatureName"+n.target.id+"% is hit by "+n.name),n.target.takeDamage(new i.a(n.owner,r,1,[],e),{isFromTrap:!0}),t.hexagons.forEach((function(e){e.destroyTrap()})),n.deleteEffect())}))}},e);t.hexagons.forEach((function(e){e.createTrap("poisonous-vine",[o],s.creature.player,{turnLifetime:n,fullTurnLifetime:!0,ownerCreature:s.creature,destroyOnActivate:!0,destroyAnimation:"shrinkDown"})}))},_getHexes:function(){var t=e.grid.hexes[this.creature.y][this.creature.x].adjacentHex(2);return o.a(t,this.creature.size,e.grid)}},{trigger:"onQuery",_targetTeam:n.a.both,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this._getHexes(),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this._getHexes()})},activate:function(t){var a=this,s=this;s.end();var o=[];o.push(t);for(var h=r.extend({},s.damages),f=function(t){var r=o[t];a.isUpgraded()&&Object(n.b)(a.creature,r,n.a.ally)&&r.addEffect(new c.a(a.title,a.creature,r,"onUnderAttack",{effectFn:function(e,t){for(;;){var a=t.applyDamage();if(a.total<=0||t.damages.shock<=0||r.health<=1){t.damages={shock:0};break}if(!(a.total>=r.health))break;t.damages.shock--}},deleteTrigger:"onEndPhase",noLog:!0},e));var f=new i.a(s.creature,h,1,[],e);if(void 0===(h=r.takeDamage(f)).damages)return"break";if(h.kill)return"break";if(h.damages.total<=0)return"break";if(""!==h.damageObj.status)return"break";delete h.damages.total,h=h.damages;var g=s.getTargets(r.adjacentHexes(1,!0));if(0===(g=g.filter((function(e){return void 0!==e.hexesHit&&-1==o.indexOf(e.target)}))).length)return"break";for(var d={size:0,stats:{defense:-99999,shock:-99999}},m=0;m<g.length;m++)if(void 0!==g[m]){var l=g[m].target;l.stats.shock>d.stats.shock&&(l==s.creature&&1==g.length||l!=s.creature)&&(d=l)}if(!(d instanceof u.a))return"break";o.push(d)},g=0;g<o.length;g++){if("break"===f(g))break}},_getHexes:function(){return e.grid.getHexMap(this.creature.x-3,this.creature.y-2,0,!1,s.k)}}]}},987:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),i=a.n(r),n=a(4),s=a.n(n),o=a(0),u=a(5),c=function(){function e(t,a,r,n,s,u){i()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=a,this.target=r,this.trigger=n,this.creationTurn=u.turn;var c=o.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);o.extend(this,c),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);