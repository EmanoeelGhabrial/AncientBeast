(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{328:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(120),n=a(24),s=a(48),o=a(8),u=a(989);t.default=function(e){e.abilities[44]=[{movementType:function(){return"flying"},trigger:"",require:function(){return!0},activate:function(){}},{trigger:"onQuery",_targetTeam:n.a.Enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.j),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.j)})},activate:function(t){if(this.end(),this.isUpgraded()){var a=new u.a("Slicing Pounce",this.creature,t,"onDamage",{alterations:{offense:-1}},e);t.addEffect(a),e.log("%CreatureName"+t.id+"%'s offense is lowered by 1")}var i=new r.a(this.creature,this.damages,1,[],e);t.takeDamage(i)}},{trigger:"onQuery",_targetTeam:n.a.Both,require:function(){if(!this.testRequirements())return!1;var e=this,t=this.creature,a=t.getHexMap(s.q);if(a.length<2)return!1;if(a[0].creature&&a[1].creature)return!1;if(a=a.filter((function(t){return!!t.creature&&(t.creature.size<3||e.isUpgraded())})),!this.atLeastOneTarget(a,{team:this._targetTeam}))return!1;var i=a[0].creature||a[1].creature;return i.stats.moveable?!(t.remainingMove<i.size)||(this.message="Not enough movement points.",!1):(this.message="Target is not moveable.",!1)},query:function(){var t=this,a=this.creature,i=a.getHexMap(s.q),r=i[0].creature||i[1].creature,n=Math.floor(a.remainingMove/r.size),o=a.size+r.size,u=e.grid.getHexMap(a.x-s.p.origin[0],a.y-s.p.origin[1],0,!1,s.p)[0].creature==r,f=u?a.x+r.size:a.x;e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},fnOnSelect:function(t){for(var i=0;i<r.hexagons.length;i++)e.grid.cleanHex(r.hexagons[i]),r.hexagons[i].displayVisualState("dashed");for(var n=0;n<a.hexagons.length;n++)e.grid.cleanHex(a.hexagons[n]),a.hexagons[n].overlayVisualState("hover h_player"+a.team);for(var s=0;s<o;s++)if(e.grid.hexExists(t.y,t.x-s)){var f=e.grid.hexes[t.y][t.x-s],c=void 0;c=u?s<r.size?r.team:a.team:s>1?r.team:a.team,e.grid.cleanHex(f),f.overlayVisualState("active creature player"+c),f.displayVisualState("creature player"+c)}},team:this._targetTeam,id:[a.id,r.id],size:o,flipped:a.player.flipped,hexes:e.grid.getFlyingRange(f,a.y,n,o,[a.id,r.id]).filter((function(e){return a.y==e.y&&(u?e.x<f:e.x>f-a.size-r.size+1)})),args:{trg:r.id,trgIsInfront:u},callbackAfterQueryHexes:function(){for(var t=0;t<r.hexagons.length;t++)e.grid.cleanHex(r.hexagons[t]),r.hexagons[t].displayVisualState("dashed")},fillHexOnHover:!1})},activate:function(t,a){var i=this;i.end();for(var r=this.creature,n=e.creatures[a.trg],s=a.trgIsInfront,u=e.grid.hexes[t.y][s?t.x-n.size:t.x],f=e.grid.hexes[t.y][s?t.x:t.x-r.size],c=0,g=0,h=e.grid.hexes[r.y][r.x];!c;)g++,o.d(h.adjacentHex(g),u)&&(c=g);r.remainingMove-=c*n.size,r.moveTo(u,{animation:"fly",callback:function(){n.updateHex()},ignoreMovementPoint:!0}),n.moveTo(f,{animation:"fly",callback:function(){i.creature.updateHex(),i.creature.queryMove()},ignoreMovementPoint:!0,overrideSpeed:r.animation.walk_speed})}},{trigger:"onQuery",_targetTeam:n.a.Enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.j),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.j)})},activate:function(t){var a=this;a.end();var n=i.extend({},a.damages);this.isUpgraded()||delete n.poison;var s=new r.a(a.creature,n,1,[],e);if("Shielded"!==t.takeDamage(s).damageObj.status){var o=new u.a(this.title,this.creature,t,"onStartPhase",{stackable:!1,effectFn:function(t,i){e.log("%CreatureName"+i.id+"% is affected by "+a.title),i.takeDamage(new r.a(t.owner,{poison:a.damages.poison},1,[],e),{isFromTrap:!0})}},e);t.replaceEffect(o),e.log("%CreatureName"+t.id+"% is poisoned by "+this.title)}}}]}},989:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a(3),r=a.n(i),n=a(4),s=a.n(n),o=a(0),u=a(5),f=function(){function e(t,a,i,n,s,u){r()(this,e),this.id=u.effectId++,this.game=u,this.name=t,this.owner=a,this.target=i,this.trigger=n,this.creationTurn=u.turn;var f=o.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},s);o.extend(this,f),u.effects.push(this)}return s()(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof u.a&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);