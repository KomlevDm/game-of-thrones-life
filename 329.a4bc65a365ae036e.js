"use strict";(self.webpackChunkgame_of_thrones=self.webpackChunkgame_of_thrones||[]).push([[329],{3329:(ci,H,g)=>{g.r(H),g.d(H,{GamePageComponent:()=>oi});var Ae=/\s/;var be=/^\s+/;const _e=function Ee(e){return e&&e.slice(0,function ye(e){for(var r=e.length;r--&&Ae.test(e.charAt(r)););return r}(e)+1).replace(be,"")},D=function Oe(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},V="object"==typeof global&&global&&global.Object===Object&&global;var Ie="object"==typeof self&&self&&self.Object===Object&&self;const K=V||Ie||Function("return this")();var Me=K.Symbol,Y=Object.prototype,Le=Y.hasOwnProperty,De=Y.toString,x=Me?Me.toStringTag:void 0;var Re=Object.prototype.toString;var $=Me?Me.toStringTag:void 0;const k=function Ue(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?function Pe(e){var r=Le.call(e,x),t=e[x];try{e[x]=void 0;var i=!0}catch{}var n=De.call(e);return i&&(r?e[x]=t:delete e[x]),n}(e):function Ge(e){return Re.call(e)}(e)},N=function we(e){return null!=e&&"object"==typeof e};var He=/^[-+]0x[0-9a-f]+$/i,Ve=/^0b[01]+$/i,Ke=/^0o[0-7]+$/i,Ye=parseInt;const Qe=function $e(e){if("number"==typeof e)return e;if(function Xe(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==k(e)}(e))return NaN;if(D(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=D(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=_e(e);var t=Ve.test(e);return t||Ke.test(e)?Ye(e.slice(2),t?2:8):He.test(e)?NaN:+e};var q=1/0;const j=function Je(e){return e?(e=Qe(e))===q||e===-q?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},st=function tt(e,r,t){return e&&e.length?(r=t||void 0===r?1:function We(e){var r=j(e),t=r%1;return r==r?t?r-t:r:0}(r),function me(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),(t=t>n?n:t)<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+r];return a}(e,0,r<0?0:r)):[]};var p=g(2722),it=g(6895),h=g(6929),s=g(4650);function rt(e,r){if(1&e&&(s.TgZ(0,"div",12)(1,"div",13),s._UZ(2,"div",14),s.qZA(),s._UZ(3,"img",15),s.qZA()),2&e){const t=s.oxw();s.xp6(2),s.Udp("transform",t.bossBarTransformCss)}}let nt=(()=>{class e{lives=0;isShieldActivated=!1;isPunchActivated=!1;isLightningActivated=!1;heroName="";hasBoss=!1;bossLifePct=100;score=0;get bossBarTransformCss(){return"translateX("+(this.bossLifePct-100)+"%)"}height=h.z.Y.MIN;static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s.Xpm({type:e,selectors:[["bar"]],hostVars:2,hostBindings:function(i,n){2&i&&s.Udp("height",n.height,"px")},inputs:{lives:"lives",isShieldActivated:"isShieldActivated",isPunchActivated:"isPunchActivated",isLightningActivated:"isLightningActivated",heroName:"heroName",hasBoss:"hasBoss",bossLifePct:"bossLifePct",score:"score"},standalone:!0,features:[s.jDz],decls:19,vars:10,consts:[[1,"side-slot"],[1,"lives"],[1,"ice-and-fire-font"],["src","assets/img/game/artifacts/life.png"],[1,"power"],["src","assets/img/game/artifacts/shield.png"],["src","assets/img/game/artifacts/punch.png"],["src","assets/img/game/artifacts/lightning.png"],[1,"side-slot","right"],["class","boss-life",4,"ngIf"],[1,"score"],["src","assets/img/game/artifacts/coins.png"],[1,"boss-life"],[1,"life"],[1,"bar"],["src","assets/img/game/boss/boss-avatar.png"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0)(1,"div",1)(2,"span",2),s._uU(3),s.qZA(),s._UZ(4,"img",3),s.qZA(),s.TgZ(5,"div",4),s._UZ(6,"img",5),s.qZA(),s.TgZ(7,"div",4),s._UZ(8,"img",6),s.qZA(),s.TgZ(9,"div",4),s._UZ(10,"img",7),s.qZA()(),s.TgZ(11,"div",2),s._uU(12),s.qZA(),s.TgZ(13,"div",8),s.YNc(14,rt,4,2,"div",9),s.TgZ(15,"div",10)(16,"span",2),s._uU(17),s.qZA(),s._UZ(18,"img",11),s.qZA()()),2&i&&(s.xp6(3),s.Oqu(n.lives),s.xp6(2),s.ekj("activated",n.isShieldActivated),s.xp6(2),s.ekj("activated",n.isPunchActivated),s.xp6(2),s.ekj("activated",n.isLightningActivated),s.xp6(3),s.Oqu(n.heroName),s.xp6(2),s.Q6J("ngIf",n.hasBoss),s.xp6(3),s.Oqu(n.score))},dependencies:[it.O5],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 12px;box-sizing:border-box}.side-slot[_ngcontent-%COMP%]{display:flex;align-items:center;width:400px;gap:24px}.side-slot.right[_ngcontent-%COMP%]{justify-content:flex-end}.lives[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.lives[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}.power[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;filter:grayscale(1);transition:filter .3s linear}.power[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}.power.activated[_ngcontent-%COMP%]{filter:none}.boss-life[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.boss-life[_ngcontent-%COMP%]   .life[_ngcontent-%COMP%]{width:220px;height:24px;overflow:hidden;border:1px solid rgb(255,255,255);border-radius:2px}.boss-life[_ngcontent-%COMP%]   .life[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#c50907;background-image:linear-gradient(0deg,transparent,rgba(0,0,0,.2) 50%,transparent,transparent);transform:translate(0)}.boss-life[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;border:1px solid rgb(255,255,255);border-radius:50%;box-sizing:border-box}.score[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;justify-self:flex-end}.score[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.score[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px}.ice-and-fire-font[_ngcontent-%COMP%]{margin-top:7px}"],changeDetection:0})}return e})();var O=g(3903),I=g(4463),F=g(1354),U=g(4795),m=g(3184),at=Math.floor,ot=Math.random;const J=function ct(e,r){return e+at(ot()*(r-e+1))};const W=function St(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ee=function At(e){return null!=e&&W(e.length)&&!function ft(e){if(!D(e))return!1;var r=k(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}(e)};var Tt=/^(?:0|[1-9]\d*)$/;const te=function bt(e,r){var t=typeof e;return!!(r=r??9007199254740991)&&("number"==t||"symbol"!=t&&Tt.test(e))&&e>-1&&e%1==0&&e<r};var Ot=parseFloat,Ct=Math.min,It=Math.random;const v=function xt(e,r,t){if(t&&"boolean"!=typeof t&&function Et(e,r,t){if(!D(t))return!1;var i=typeof r;return!!("number"==i?ee(t)&&te(r,t.length):"string"==i&&r in t)&&function ht(e,r){return e===r||e!=e&&r!=r}(t[r],e)}(e,r,t)&&(r=t=void 0),void 0===t&&("boolean"==typeof r?(t=r,r=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===r?(e=0,r=1):(e=j(e),void 0===r?(r=e,e=0):r=j(r)),e>r){var i=e;e=r,r=i}if(t||e%1||r%1){var n=It();return Ct(e+n*(r-e+Ot("1e-"+((n+"").length-1))),r)}return J(e,r)},se=function Mt(e){var r=e.length;return r?e[J(0,r-1)]:void 0},kt=function Pt(e,r){return function Lt(e,r){for(var t=-1,i=null==e?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}(r,function(t){return e[t]})};const ie=function Bt(e){return N(e)&&"[object Arguments]"==k(e)};var re=Object.prototype,jt=re.hasOwnProperty,Ft=re.propertyIsEnumerable;const wt=ie(function(){return arguments}())?ie:function(e){return N(e)&&jt.call(e,"callee")&&!Ft.call(e,"callee")},ne=Array.isArray;var ae="object"==typeof exports&&exports&&!exports.nodeType&&exports,oe=ae&&"object"==typeof module&&module&&!module.nodeType&&module,ce=oe&&oe.exports===ae?K.Buffer:void 0;const Yt=(ce?ce.isBuffer:void 0)||function Xt(){return!1};var d={};d["[object Float32Array]"]=d["[object Float64Array]"]=d["[object Int8Array]"]=d["[object Int16Array]"]=d["[object Int32Array]"]=d["[object Uint8Array]"]=d["[object Uint8ClampedArray]"]=d["[object Uint16Array]"]=d["[object Uint32Array]"]=!0,d["[object Arguments]"]=d["[object Array]"]=d["[object ArrayBuffer]"]=d["[object Boolean]"]=d["[object DataView]"]=d["[object Date]"]=d["[object Error]"]=d["[object Function]"]=d["[object Map]"]=d["[object Number]"]=d["[object Object]"]=d["[object RegExp]"]=d["[object Set]"]=d["[object String]"]=d["[object WeakMap]"]=!1;var he="object"==typeof exports&&exports&&!exports.nodeType&&exports,M=he&&"object"==typeof module&&module&&!module.nodeType&&module,w=M&&M.exports===he&&V.process,_s=function(){try{return M&&M.require&&M.require("util").types||w&&w.binding&&w.binding("util")}catch{}}(),le=_s&&_s.isTypedArray;const Cs=le?function Ts(e){return function(r){return e(r)}}(le):function As(e){return N(e)&&W(e.length)&&!!d[k(e)]};var xs=Object.prototype.hasOwnProperty;const Ls=function Ms(e,r){var t=ne(e),i=!t&&wt(e),n=!t&&!i&&Yt(e),a=!t&&!i&&!n&&Cs(e),o=t||i||n||a,c=o?function Nt(e,r){for(var t=-1,i=Array(e);++t<e;)i[t]=r(t);return i}(e.length,String):[],l=c.length;for(var f in e)(r||xs.call(e,f))&&(!o||!("length"==f||n&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||te(f,l)))&&c.push(f);return c};var Ds=Object.prototype;const Gs=function Ns(e,r){return function(t){return e(r(t))}}(Object.keys,Object);var js=Object.prototype.hasOwnProperty;const Us=function Fs(e){if(!function Ps(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ds)}(e))return Gs(e);var r=[];for(var t in Object(e))js.call(e,t)&&"constructor"!=t&&r.push(t);return r},Zs=function Xs(e){return null==e?[]:kt(e,function ws(e){return ee(e)?Ls(e):Us(e)}(e))},Vs=function Hs(e){return se(Zs(e))},R=function Ks(e){return(ne(e)?se:Vs)(e)};var A=g(6284),y=g(1337);const T_GENERATION_TIME_S_MIN=10,T_GENERATION_TIME_S_MAX=15,T_SPEED=y.Q.SPEED+2,T_SCALE_MIN=.23,T_SCALE_MAX=.28,T_SCALE_SPEED=.0015;let ge=(()=>{class e{assetsService;artifacts=new Set;game=null;generationTimeMs=1e3*T_GENERATION_TIME_S_MAX;constructor(t){this.assetsService=t}start(t){this.game=t,this.game.ticker.add(this.render)}ngOnDestroy(){this.game&&(this.game.ticker.remove(this.render),this.artifacts.forEach(t=>t.sprite.destroy()),this.artifacts.clear(),this.game=null,this.generationTimeMs=1e3*T_GENERATION_TIME_S_MAX)}deleteOneAsync(t){setTimeout(()=>{t.sprite.destroyed||t.sprite.destroy(),this.artifacts.delete(t)})}render=t=>{this.artifacts.forEach(i=>{i.sprite.x<-h.z.X.DELTA(i.sprite)?this.deleteOneAsync(i):this.renderOne(t,i)}),this.generationTimeMs<=0?(this.addOne(),this.generationTimeMs=1e3*v(T_GENERATION_TIME_S_MIN,T_GENERATION_TIME_S_MAX)):this.generationTimeMs-=t*m.vB5.shared.deltaMS};addOne(){if(!this.game)return;const[t,i]=R(Object.entries(this.assetsService.artifacts)),n=new m.jyi(i);n.scale.set(T_SCALE_MAX),n.anchor.set(.5);const a=h.z.Y.DELTA(n),o=v(h.z.Y.MIN+a,h.z.HEIGHT-a);n.position.set(h.z.WIDTH+h.z.X.DELTA(n),o);const c={name:t,sprite:n,scaling:1};this.artifacts.add(c),this.game.stage.addChild(c.sprite)}renderOne(t,i){i.sprite.x-=t*T_SPEED,i.sprite.scale.x<=T_SCALE_MIN&&(i.scaling=1),i.sprite.scale.x>=T_SCALE_MAX&&(i.scaling=-1),i.sprite.scale.set(i.sprite.scale.x+i.scaling*T_SCALE_SPEED)}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var E=g(4449),ue=g(5785),ve=g(1135),Ys=g(4004),G=g(9405);function fe({sprite:e,delta:r,speed:t,yMotion:i,random:n}){i.canChange?((e.y<=i.min||e.y>=i.max)&&(i.dir*=-1,i.canChange=!1),e.y+=i.dir*r*t):v(n.scope)===n.sample&&(i.canChange=!0)}const S={ATTACK:{MIN_INTERVAL_S:2,MAX_INTERVAL_S:4,SPEED:y.Q.SPEED+8,SCALE:.21,SCALE_SPEED:.015,ROTATION_ANGLE_DEG:7},SPEED:y.Q.SPEED+1,SCORE:{MIN:800,MAX:1e3}};class L{sprite;score=v(S.SCORE.MIN,S.SCORE.MAX);attack;speed;yMotion={min:0,max:h.z.HEIGHT,canChange:!1,dir:1};attackTime=1e3*S.ATTACK.MIN_INTERVAL_S;constructor(r){this.sprite=new m.KgH(r.textures),this.sprite.scale.set(r.scale),this.sprite.anchor.set(.5),this.sprite.animationSpeed=r.animationSpeed,this.sprite.play();const t=h.z.Y.DELTA(this.sprite);this.yMotion.min=h.z.Y.MIN+t,this.yMotion.max=h.z.HEIGHT-t;const i=v(this.yMotion.min,this.yMotion.max);this.sprite.position.set(2*h.z.WIDTH+h.z.X.DELTA(this.sprite),i),this.attack=r.attack,this.speed=r.speed??S.SPEED,this.yMotion.dir=i>h.z.Y.MID?-1:1}render(r){this.xRender(r),this.yRender(r),this.attackRender(r)}xRender(r){this.sprite.x-=r*this.speed}yRender(r){fe({sprite:this.sprite,delta:r,speed:this.speed,yMotion:this.yMotion,random:{scope:300,sample:50}})}attackRender(r){this.attack&&(this.attackTime<=0?(this.addAttack(),this.attackTime=1e3*v(S.ATTACK.MIN_INTERVAL_S,S.ATTACK.MAX_INTERVAL_S)):this.attackTime-=r*m.vB5.shared.deltaMS)}addAttack(){this.attack&&this.attack.service.addOne({texture:this.attack.texture,x:this.sprite.x-h.z.X.DELTA(this.sprite),y:this.sprite.y,whose:"monster",speed:S.ATTACK.SPEED,rotationAngleDeg:S.ATTACK.ROTATION_ANGLE_DEG,scale:S.ATTACK.SCALE,scaleSpeed:S.ATTACK.SCALE_SPEED})}}let $s=(()=>{class e{assetsService;attacksService;constructor(t,i){this.assetsService=t,this.attacksService=i}create(){return new L({textures:this.assetsService.monsters.blackDragon.animations.self,scale:.58,animationSpeed:.3,attack:{service:this.attacksService,texture:this.assetsService.attacks["attack-6"]}})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qs=(()=>{class e{assetsService;attacksService;constructor(t,i){this.assetsService=t,this.attacksService=i}create(){return new L({textures:this.assetsService.monsters.deathAngel.animations.self,scale:.31,animationSpeed:.65,attack:{service:this.attacksService,texture:this.assetsService.attacks["attack-3"]}})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),qs=(()=>{class e{assetsService;constructor(t){this.assetsService=t}create(){return new L({textures:this.assetsService.monsters.death.animations.self,scale:.29,animationSpeed:.4,speed:y.Q.SPEED+5})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Js=(()=>{class e{assetsService;attacksService;constructor(t,i){this.assetsService=t,this.attacksService=i}create(){return new L({textures:this.assetsService.monsters.icePhoenix.animations.self,scale:.41,animationSpeed:.6,attack:{service:this.attacksService,texture:this.assetsService.attacks["attack-4"]}})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ws=(()=>{class e{assetsService;attacksService;constructor(t,i){this.assetsService=t,this.attacksService=i}create(){return new L({textures:this.assetsService.monsters.satan.animations.self,scale:.36,animationSpeed:.2,attack:{service:this.attacksService,texture:this.assetsService.attacks["attack-2"]}})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const _={ATTACK:{MIN_INTERVAL_S:1,MAX_INTERVAL_S:2,SPEED:y.Q.SPEED+10,SCALE:.24,SCALE_SPEED:.02,ROTATION_ANGLE_DEG:10},SPEED:y.Q.SPEED+1};class ei{sprite;score="invulnerable";attack;speed;attackTime=1e3*_.ATTACK.MIN_INTERVAL_S;constructor(r){this.sprite=new m.KgH(r.textures),this.sprite.scale.set(r.scale),this.sprite.anchor.set(.5),this.sprite.animationSpeed=r.animationSpeed,this.sprite.position.set(h.z.WIDTH+h.z.X.DELTA(this.sprite),h.z.Y.MID),this.sprite.play(),this.attack=r.attack,this.speed=r.speed??_.SPEED}render(r){this.xRender(r),this.attackRender(r)}xRender(r){this.sprite.x-=r*this.speed}attackRender(r){this.attack&&(this.attackTime<=0?(this.addAttack(),this.attackTime=1e3*v(_.ATTACK.MIN_INTERVAL_S,_.ATTACK.MAX_INTERVAL_S)):this.attackTime-=r*m.vB5.shared.deltaMS)}addAttack(){this.attack&&this.attack.service.addOne({texture:this.attack.texture,x:this.sprite.x-h.z.X.DELTA(this.sprite),y:this.sprite.y,whose:"monster",speed:_.ATTACK.SPEED,rotationAngleDeg:_.ATTACK.ROTATION_ANGLE_DEG,scale:_.ATTACK.SCALE,scaleSpeed:_.ATTACK.SCALE_SPEED})}}let ti=(()=>{class e{assetsService;attacksService;constructor(t,i){this.assetsService=t,this.attacksService=i}create(){return new ei({textures:this.assetsService.monsters.undeadDragon.animations.self,scale:.8,animationSpeed:.4,attack:{service:this.attacksService,texture:this.assetsService.attacks["attack-5"]}})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const b_GENERATION_TIME_S_MIN=2,b_GENERATION_TIME_S_MAX=6,b_GENERATION_TIME_S_BOSS=20,b_INVULNERABLE_COUNTER_MIN=4,b_INVULNERABLE_COUNTER_MAX=6;let z=(()=>{class e{deathAngelService;icePhoenixService;blackDragonService;satanService;deathService;undeadDragonService;monsters=new Set;hasBoss=!1;game=null;generationTimeMs=1e3*b_GENERATION_TIME_S_MIN;invulnerableCounter=b_INVULNERABLE_COUNTER_MAX;invulnerableCounterValue=0;constructor(t,i,n,a,o,c){this.deathAngelService=t,this.icePhoenixService=i,this.blackDragonService=n,this.satanService=a,this.deathService=o,this.undeadDragonService=c}start(t){this.game=t,this.game.ticker.add(this.render)}ngOnDestroy(){this.game&&(this.game.ticker.remove(this.render),this.monsters.forEach(t=>t.sprite.destroy()),this.monsters.clear(),this.hasBoss=!1,this.game=null,this.generationTimeMs=1e3*b_GENERATION_TIME_S_MIN,this.invulnerableCounter=b_INVULNERABLE_COUNTER_MAX,this.invulnerableCounterValue=0)}deleteOneAsync(t){setTimeout(()=>{t.sprite.destroyed||t.sprite.destroy(),this.monsters.delete(t)})}render=t=>{this.game&&(this.monsters.forEach(i=>{i.sprite.x<-h.z.X.DELTA(i.sprite)?this.deleteOneAsync(i):i.render(t)}),this.generationTimeMs<=0?(this.addOne(),this.generationTimeMs=1e3*(this.hasBoss?b_GENERATION_TIME_S_BOSS:v(b_GENERATION_TIME_S_MIN,b_GENERATION_TIME_S_MAX))):this.generationTimeMs-=t*this.game.ticker.deltaMS)};createOne(){return this.invulnerableCounterValue===this.invulnerableCounter?this.createInvulnerableMonster():R([this.deathService,this.deathAngelService,this.icePhoenixService,this.blackDragonService,this.satanService]).create()}addOne(){if(!this.game)return;const t=this.createOne();this.monsters.add(t),this.game.stage.addChild(t.sprite),this.invulnerableCounterValue++}createInvulnerableMonster(){return this.invulnerableCounterValue=0,this.invulnerableCounter=v(b_INVULNERABLE_COUNTER_MIN,b_INVULNERABLE_COUNTER_MAX),R([this.undeadDragonService]).create()}static \u0275fac=function(i){return new(i||e)(s.LFG(Qs),s.LFG(Js),s.LFG($s),s.LFG(Ws),s.LFG(qs),s.LFG(ti))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const u={LIVES:50,SPEED:{X:1,Y:y.Q.SPEED+5},ATTACK:{MIN_INTERVAL_S:1,MAX_INTERVAL_S:2,SPEED:y.Q.SPEED+10,SCALE:.23,SCALE_SPEED:.018,ROTATION_ANGLE_DEG:12,Y_DELTA:30},PUNCH_MAX_ARC_COEF:1e3,GENERATION_HERO_SCORE:{MIN:1e4,MAX:15e3}};let X=(()=>{class e{assetsService;heroService;monsterService;attacksService;livesPct$;hasBoss$;sprite=null;set lives(t){this._lives$.next(t)}get lives(){return this._lives$.value}get canUseMnemoShield(){return 2===v(4)}get canUsePunch(){return 5===v(10)}_lives$=new ve.X(u.LIVES);_hasBoss$=new ve.X(!1);yMotion={min:0,max:h.z.HEIGHT,canChange:!1,dir:1};game=null;generationHeroScore=u.GENERATION_HERO_SCORE.MAX;attackTime=1e3*u.ATTACK.MIN_INTERVAL_S;get canCreate(){return!this._hasBoss$.value&&this.heroService.score>=this.generationHeroScore}constructor(t,i,n,a){this.assetsService=t,this.heroService=i,this.monsterService=n,this.attacksService=a,this.livesPct$=this._lives$.asObservable().pipe((0,Ys.U)(o=>o/u.LIVES*100)),this.hasBoss$=this._hasBoss$.asObservable()}start(t){this.game=t,this.game.ticker.add(this.render),this.generationHeroScore=v(u.GENERATION_HERO_SCORE.MIN,u.GENERATION_HERO_SCORE.MAX)}ngOnDestroy(){this.game&&(this.game.ticker.remove(this.render),this.game=null,this.sprite=null,this.lives=u.LIVES,this._hasBoss$.next(!1))}render=t=>{this.canCreate&&this.create(),this.xRender(t),this.yRender(t),this.attackRender(t)};create(){if(!this.game)return;this.sprite=new m.KgH(this.assetsService.boss.animations.self),this.sprite.scale.set(-.35,.35),this.sprite.anchor.set(.5),this.sprite.animationSpeed=.4,this.sprite.position.set(h.z.X.BOSS.CREATE,h.z.Y.MID),this.sprite.play(),this.game.stage.addChild(this.sprite);const t=h.z.Y.DELTA(this.sprite);this.yMotion.min=h.z.Y.MIN+t,this.yMotion.max=h.z.HEIGHT-t,this.monsterService.hasBoss=!0,this._hasBoss$.next(!0)}xRender(t){this.sprite&&this.sprite.x>h.z.X.BOSS.LIFE-h.z.X.DELTA(this.sprite)&&(this.sprite.x-=t*u.SPEED.X)}yRender(t){this.sprite&&fe({sprite:this.sprite,delta:t,speed:u.SPEED.Y,yMotion:this.yMotion,random:{scope:50,sample:25}})}attackRender(t){this.attackTime<=0?(this.canUsePunch?this.addPunch():this.addAttack(),this.attackTime=1e3*v(u.ATTACK.MIN_INTERVAL_S,u.ATTACK.MAX_INTERVAL_S)):this.attackTime-=t*m.vB5.shared.deltaMS}addAttack(t){this.sprite&&this.attacksService.addOne({texture:R(this.assetsService.attacks),x:this.sprite.x-h.z.X.DELTA(this.sprite),y:this.sprite.y+u.ATTACK.Y_DELTA,whose:"monster",speed:u.ATTACK.SPEED,rotationAngleDeg:u.ATTACK.ROTATION_ANGLE_DEG,scale:u.ATTACK.SCALE,scaleSpeed:u.ATTACK.SCALE_SPEED,yRender:t})}addPunch(){this.addAttack((t,i)=>{t.y-=i*u.PUNCH_MAX_ARC_COEF/t.x}),this.addAttack((t,i)=>{t.y-=i*u.PUNCH_MAX_ARC_COEF/2/t.x}),this.addAttack(),this.addAttack((t,i)=>{t.y+=i*u.PUNCH_MAX_ARC_COEF/2/t.x}),this.addAttack((t,i)=>{t.y+=i*u.PUNCH_MAX_ARC_COEF/t.x})}static \u0275fac=function(i){return new(i||e)(s.LFG(A.z),s.LFG(G.e),s.LFG(z),s.LFG(E.U))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var C=(()=>{return(e=C||(C={})).Life="life",e.Shield="shield",e.Punch="punch",e.Lightning="lightning",C;var e})();let si=(()=>{class e{audioService;assetsService;heroService;monstersService;attacksService;artifactsService;bossService;game=null;constructor(t,i,n,a,o,c,l){this.audioService=t,this.assetsService=i,this.heroService=n,this.monstersService=a,this.attacksService=o,this.artifactsService=c,this.bossService=l}start(t){this.game=t,this.game.ticker.add(this.render)}ngOnDestroy(){this.game&&(this.game.ticker.remove(this.render),this.game=null)}render=()=>{this.artifactsRender(),this.heroRender(),this.monstersRender(),this.bossRender()};artifactsRender(){if(!this.heroService.sprite)return;const{left:t,right:i,top:n,bottom:a}=this.heroService.sprite.getBounds();this.artifactsService.artifacts.forEach(o=>{const c=o.sprite.x,l=o.sprite.y;if(c>=t&&c<=i&&l>=n&&l<=a){switch(o.name){case C.Life:this.audioService.getLifeArtifact.replay(),this.heroService.lives+=1;break;case C.Shield:this.audioService.getShieldArtifact.replay(),this.heroService.activateShield();break;case C.Punch:this.audioService.getPunchArtifact.replay(),this.heroService.activatePunch();break;case C.Lightning:this.audioService.getLightningArtifact.replay(),this.heroService.activateLightning()}this.artifactsService.deleteOneAsync(o)}})}monstersRender(){this.attacksService.attacks.forEach(t=>{if("monster"===t.whose)return;const i=t.sprite.x,n=t.sprite.y;this.monstersService.monsters.forEach(a=>{const{left:o,right:c,top:l,bottom:f}=a.sprite.getBounds();i>=o&&i<=c&&n>=l&&n<=f&&("invulnerable"===a.score?(this.audioService.monsterShield.replay(),this.addSmallBang(i,n)):(this.audioService.monsterDeath.replay(),this.addBang(a.sprite.x,a.sprite.y),this.heroService.score+=a.score,this.monstersService.deleteOneAsync(a)),this.attacksService.deleteOneAsync(t))})})}heroRender(){if(!this.heroService.sprite)return;const{left:t,right:i,top:n,bottom:a}=this.heroService.sprite.getBounds();this.attacksService.attacks.forEach(o=>{if("hero"===o.whose)return;const c=o.sprite.x,l=o.sprite.y;c>=t&&c<=i&&l>=n&&l<=a&&(this.heroService.isShieldActivated?(this.audioService.blockShield.replay(),this.addSmallBang(c,l)):(this.audioService.heroDeath.replay(),this.heroService.lives-=1,this.addBang(this.heroService.sprite.x,this.heroService.sprite.y)),this.attacksService.deleteOneAsync(o))}),this.monstersService.monsters.forEach(o=>{const c=o.sprite.x,l=o.sprite.y;c>=t&&c<=i&&l>=n&&l<=a&&(this.heroService.isShieldActivated?(this.audioService.blockShield.replay(),this.addBang(c,l)):(this.audioService.heroDeath.replay(),this.heroService.lives-=1,this.addBang(this.heroService.sprite.x,this.heroService.sprite.y)),this.audioService.monsterDeath.replay(),this.monstersService.deleteOneAsync(o))})}bossRender(){if(!this.bossService.sprite)return;const{left:t,right:i,top:n,bottom:a}=this.bossService.sprite.getBounds();this.attacksService.attacks.forEach(o=>{if("monster"===o.whose)return;const c=o.sprite.x,l=o.sprite.y;c>=t&&c<=i&&l>=n&&l<=a&&(this.bossService.canUseMnemoShield?(this.audioService.monsterShield.replay(),this.addSmallBang(c,l)):(this.audioService.monsterDeath.replay(),this.bossService.lives-=1,this.addBang(this.bossService.sprite.x,this.bossService.sprite.y)),this.attacksService.deleteOneAsync(o))})}addBang(t,i){if(!this.game)return;const n=new m.KgH(this.assetsService.bang.animations.self);n.animationSpeed=.4,n.scale.set(.5),n.angle=90,n.anchor.set(.5),n.position.set(t,i),n.loop=!1,n.onComplete=()=>n.destroy(),n.play(),this.game.stage.addChild(n)}addSmallBang(t,i){if(!this.game)return;const n=new m.KgH(this.assetsService.smallBang.animations.self);n.animationSpeed=.4,n.scale.set(.5),n.anchor.set(.5),n.position.set(t,i),n.loop=!1,n.onComplete=()=>n.destroy(),n.play(),this.game.stage.addChild(n)}static \u0275fac=function(i){return new(i||e)(s.LFG(ue.Q),s.LFG(A.z),s.LFG(G.e),s.LFG(z),s.LFG(E.U),s.LFG(ge),s.LFG(X))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),B=(()=>{class e{audioService;bgService;heroService;artifactsService;interactionsService;monstersService;attacksService;bossService;host=null;game=null;constructor(t,i,n,a,o,c,l,f){this.audioService=t,this.bgService=i,this.heroService=n,this.artifactsService=a,this.interactionsService=o,this.monstersService=c,this.attacksService=l,this.bossService=f}start(t){this.game||(this.host=t,this.game=new m.MxU({resizeTo:t,resolution:window.devicePixelRatio}),t.appendChild(this.game.view),this.game.stage.cullable=!0,this.bgService.start(this.game),this.artifactsService.start(this.game),this.attacksService.start(this.game),this.heroService.start(this.game),this.monstersService.start(this.game),this.interactionsService.start(this.game),this.bossService.start(this.game),this.audioService.bgAudio.setVolume(0),this.audioService.playGame.play())}restart(){this.host&&(this.destroy(),this.start(this.host))}pause(){this.game&&this.game.stop()}continue(){this.game&&this.game.start()}finish(){this.host&&(this.destroy(),this.host=null,this.audioService.bgAudio.setVolume(1))}destroy(){this.game&&(this.bgService.ngOnDestroy(),this.artifactsService.ngOnDestroy(),this.attacksService.ngOnDestroy(),this.heroService.ngOnDestroy(),this.monstersService.ngOnDestroy(),this.interactionsService.ngOnDestroy(),this.bossService.ngOnDestroy(),this.game.destroy(!0,{children:!0}),this.game=null)}static \u0275fac=function(i){return new(i||e)(s.LFG(ue.Q),s.LFG(y.Q),s.LFG(G.e),s.LFG(ge),s.LFG(si),s.LFG(z),s.LFG(E.U),s.LFG(X))};static \u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Z=g(4843);let ii=(()=>{class e extends U.G{router;gameService;isDialog=!0;constructor(t,i){super(),this.router=t,this.gameService=i}ngOnInit(){super.ngOnInit(),this.self.afterOpened().pipe((0,p.R)(this.destroyer$)).subscribe(()=>this.gameService.pause()),this.self.beforeClosed().pipe((0,p.R)(this.destroyer$)).subscribe(()=>this.gameService.continue())}finish(){this.audioService.routing.replay(),this.router.navigateByUrl("/menu")}static \u0275fac=function(i){return new(i||e)(s.Y36(Z.F0),s.Y36(B))};static \u0275cmp=s.Xpm({type:e,selectors:[["game-dialog"]],hostVars:2,hostBindings:function(i,n){2&i&&s.ekj("dialog",n.isDialog)},standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:6,consts:[["mat-dialog-close",""],["mat-dialog-close","",3,"click"]],template:function(i,n){1&i&&(s.TgZ(0,"button",0),s._uU(1),s.ALo(2,"translate"),s.qZA(),s.TgZ(3,"button",1),s.NdJ("click",function(){return n.finish()}),s._uU(4),s.ALo(5,"translate"),s.qZA()),2&i&&(s.xp6(1),s.hij(" ",s.lcZ(2,2,"GamePage.GameDialog.Button.Continue"),"\n"),s.xp6(3),s.hij(" ",s.lcZ(5,4,"GamePage.GameDialog.Button.Finish"),"\n"))},dependencies:[O.Is,O.ZT,I.aw,I.X$,F.r],styles:["[_nghost-%COMP%]{width:450px}.body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}"],changeDetection:0})}return e})(),ri=(()=>{class e extends U.G{router;gameService;isDialog=!0;constructor(t,i){super(),this.router=t,this.gameService=i}ngOnInit(){super.ngOnInit(),this.self.afterOpened().pipe((0,p.R)(this.destroyer$)).subscribe(()=>{this.gameService.pause(),this.audioService.gameOver.replay()})}finish(){this.audioService.routing.replay(),this.router.navigateByUrl("/menu")}static \u0275fac=function(i){return new(i||e)(s.Y36(Z.F0),s.Y36(B))};static \u0275cmp=s.Xpm({type:e,selectors:[["game-over-dialog"]],hostVars:2,hostBindings:function(i,n){2&i&&s.ekj("dialog",n.isDialog)},standalone:!0,features:[s.qOj,s.jDz],decls:9,vars:9,consts:[[1,"title"],["mat-dialog-close","",3,"click"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0),s._uU(1),s.ALo(2,"translate"),s.qZA(),s.TgZ(3,"button",1),s.NdJ("click",function(){return n.gameService.restart()}),s._uU(4),s.ALo(5,"translate"),s.qZA(),s.TgZ(6,"button",1),s.NdJ("click",function(){return n.finish()}),s._uU(7),s.ALo(8,"translate"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,3,"GamePage.GameOverDialog.Title")),s.xp6(3),s.hij(" ",s.lcZ(5,5,"GamePage.GameOverDialog.Button.Restart"),"\n"),s.xp6(3),s.hij(" ",s.lcZ(8,7,"GamePage.GameOverDialog.Button.Finish"),"\n"))},dependencies:[O.Is,O.ZT,I.aw,I.X$,F.r],styles:["[_nghost-%COMP%]{width:450px}.body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}"],changeDetection:0})}return e})(),ni=(()=>{class e extends U.G{router;gameService;isDialog=!0;constructor(t,i){super(),this.router=t,this.gameService=i}ngOnInit(){super.ngOnInit(),this.self.afterOpened().pipe((0,p.R)(this.destroyer$)).subscribe(()=>{this.gameService.pause(),this.audioService.victory.replay()})}top(){this.audioService.routing.replay(),this.router.navigateByUrl("/top")}static \u0275fac=function(i){return new(i||e)(s.Y36(Z.F0),s.Y36(B))};static \u0275cmp=s.Xpm({type:e,selectors:[["victory-dialog"]],hostVars:2,hostBindings:function(i,n){2&i&&s.ekj("dialog",n.isDialog)},standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:6,consts:[[1,"title"],["mat-dialog-close","",3,"click"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0),s._uU(1),s.ALo(2,"translate"),s.qZA(),s.TgZ(3,"button",1),s.NdJ("click",function(){return n.top()}),s._uU(4),s.ALo(5,"translate"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,2,"GamePage.VictoryDialog.Title")),s.xp6(3),s.hij(" ",s.lcZ(5,4,"GamePage.VictoryDialog.Button.Top"),"\n"))},dependencies:[O.Is,O.ZT,I.aw,I.X$,F.r],styles:["[_nghost-%COMP%]{width:450px}"],changeDetection:0})}return e})();var ai=g(3364),pe=g(6033);let oi=(()=>{class e extends ai.g{elementRef;cdr;matDialog;gameService;heroService;bossService;heroName;lives=0;isShieldActivated=!1;isPunchActivated=!1;isLightningActivated=!1;hasBoss=!1;bossLifePct=0;score=0;constructor(t,i,n,a,o,c){super(),this.elementRef=t,this.cdr=i,this.matDialog=n,this.gameService=a,this.heroService=o,this.bossService=c,this.heroName=o.name}ngOnInit(){this.heroService.lives$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.lives=t,this.cdr.detectChanges(),t||this.matDialog.open(ri,{disableClose:!0})}),this.heroService.isShieldActivated$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.isShieldActivated=t,this.cdr.detectChanges()}),this.heroService.isPunchActivated$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.isPunchActivated=t,this.cdr.detectChanges()}),this.heroService.isLightningActivated$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.isLightningActivated=t,this.cdr.detectChanges()}),this.bossService.hasBoss$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.hasBoss=t,this.cdr.detectChanges()}),this.bossService.livesPct$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{if(this.bossLifePct=t,this.cdr.detectChanges(),!t){const i=localStorage.getItem(pe.y.Top),n=null!==i?JSON.parse(i):[],a=st(n.concat({name:this.heroService.name,score:this.heroService.score}),10).sort((o,c)=>c.score-o.score);localStorage.setItem(pe.y.Top,JSON.stringify(a)),this.matDialog.open(ni,{disableClose:!0})}}),this.heroService.score$.pipe((0,p.R)(this.destroyer$)).subscribe(t=>{this.score=t,this.cdr.detectChanges()})}ngAfterViewInit(){this.gameService.start(this.elementRef.nativeElement)}ngOnDestroy(){this.gameService.finish(),super.ngOnDestroy()}openGameDialog(){this.matDialog.openDialogs.length||this.matDialog.open(ii)}static \u0275fac=function(i){return new(i||e)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(O.uw),s.Y36(B),s.Y36(G.e),s.Y36(X))};static \u0275cmp=s.Xpm({type:e,selectors:[["game-page"]],hostBindings:function(i,n){1&i&&s.NdJ("keydown.esc",function(){return n.openGameDialog()},!1,s.evT)},standalone:!0,features:[s.qOj,s.jDz],decls:1,vars:8,consts:[[3,"lives","isShieldActivated","isPunchActivated","isLightningActivated","heroName","hasBoss","bossLifePct","score"]],template:function(i,n){1&i&&s._UZ(0,"bar",0),2&i&&s.Q6J("lives",n.lives)("isShieldActivated",n.isShieldActivated)("isPunchActivated",n.isPunchActivated)("isLightningActivated",n.isLightningActivated)("heroName",n.heroName)("hasBoss",n.hasBoss)("bossLifePct",n.bossLifePct)("score",n.score)},dependencies:[nt],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:100%;height:100%;cursor:none}bar[_ngcontent-%COMP%]{position:absolute}"],changeDetection:0})}return e})()}}]);