(self.webpackChunkfood_guide=self.webpackChunkfood_guide||[]).push([[3076],{3076:(a,i,n)=>{"use strict";n.r(i),n.d(i,{DetailPageModule:()=>d});var t=n(8583),e=n(665),r=n(3083),o=n(790),l=n(2862);const s=JSON.parse('{"a":[{"id":1,"city":"Noto (SR)","country":"Italia","address":"Via Carlo, Vico Pisacane, 3","name":"Trattoria Giuf\xe0","lat":36.89018859589135,"long":15.072539726504212,"date":"20/09/2021","ratings":{"location":7,"service":7,"menu":7,"price":6},"images":["1-1.jpeg"]},{"id":2,"city":"Siracusa (SR)","country":"Italia","address":"Via Cavour, 28","name":"Sicilia in Tavola","lat":37.06170599397385,"long":15.292956024658185,"date":"20/09/2021","ratings":{"location":7,"service":5,"menu":8,"price":6},"images":["2-1.jpeg"]},{"id":3,"city":"Noto (SR)","name":"Pizzeria Casa Matta","country":"Italia","address":"Via Tommaso Fazello, 23","lat":36.89341732336414,"long":15.065414626504229,"date":"20/09/2021","ratings":{"location":5,"service":6,"menu":9,"price":8},"images":["3-1.jpeg","3-2.jpeg","3-3.jpeg"]},{"id":4,"city":"Marzamemi (SR)","name":"Sama","country":"Italia","address":"Piazzale Raffaele Brancati, 2","lat":36.74285792656812,"long":15.119098068827979,"date":"20/09/2021","ratings":{"location":7,"service":6,"menu":8,"price":6},"images":["4-1.jpeg","4-2.jpeg"]},{"id":5,"city":"Noto (SR)","name":"Tannur","country":"Italia","address":"Via Ascenzo Mauceri, 3","lat":36.891756889220154,"long":15.07293061116067,"date":"20/09/2021","ratings":{"location":6,"service":7,"menu":7,"price":6},"images":["5-1.jpeg","5-2.jpeg","5-3.jpeg"]},{"id":6,"city":"Castelmola (ME)","name":"A\' Ficaredda","country":"Italia","address":"Via Tutti I Santi, Largo San Giorgio, 1","lat":37.858780981661305,"long":15.278127682354285,"date":"20/09/2021","ratings":{"location":6,"service":8,"menu":6,"price":7},"images":["6-1.jpeg","6-2.jpeg"]},{"id":7,"city":"Castelmola (ME)","name":"Bar Turrisi","country":"Italia","address":"Via Papa Pio IX, 19","lat":37.85851382849545,"long":15.277400882354243,"date":"20/09/2021","ratings":{"location":8,"service":4,"menu":6,"price":5},"images":["7-1.jpeg","7-2.jpeg"]},{"id":8,"city":"Giardini Naxos (ME)","name":"La Sirena","country":"Italia","address":"Via Schis\xf2, 36","lat":37.824560949942125,"long":15.274264497696707,"date":"20/09/2021","ratings":{"location":6,"service":5,"menu":6,"price":5},"images":["8-1.jpeg","8-2.jpeg"]},{"id":9,"city":"Castelmola (ME)","name":"Pizzeria Nina","country":"Italia","address":"Via Tutti I Santi","lat":37.859073222443705,"long":15.278041111190133,"date":"20/09/2021","ratings":{"location":7,"service":6,"menu":6,"price":5},"images":["9-1.jpeg","9-2.jpeg"]}]}');var c=n(3018);function g(a,i){if(1&a&&(c.TgZ(0,"ion-slide"),c._UZ(1,"img",6),c.qZA()),2&a){const a=i.$implicit;c.xp6(1),c.MGl("src","assets/img/",a,"",c.LSH)}}const u=[{path:"",component:(()=>{class a{constructor(a){this.route=a,this.slideOpts={initialSlide:0,speed:400}}ngOnInit(){this.route.params.subscribe(a=>{this.restaurant=s.a.find(i=>i.id===+a.id)})}}return a.\u0275fac=function(i){return new(i||a)(c.Y36(l.gz))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-detail"]],decls:60,vars:10,consts:[[1,"ratings-cnt"],[1,"font-bold"],["activeColor","#488aff","defaultColor","#f4f4f4","halfStar","true","readonly","true","fontSize","22px",3,"rating"],["rating",""],["pager","true",3,"options"],[4,"ngFor","ngForOf"],[3,"src"]],template:function(a,i){1&a&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content"),c.TgZ(5,"ion-card"),c.TgZ(6,"ion-card-header"),c.TgZ(7,"ion-card-title"),c._uU(8,"Scheda"),c.qZA(),c.qZA(),c.TgZ(9,"ion-card-content"),c.TgZ(10,"ion-list"),c.TgZ(11,"ion-item"),c.TgZ(12,"ion-label"),c.TgZ(13,"h2"),c._uU(14,"Localit\xe0"),c.qZA(),c.TgZ(15,"p"),c._uU(16),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"ion-item"),c.TgZ(18,"ion-label"),c.TgZ(19,"h2"),c._uU(20,"Paese"),c.qZA(),c.TgZ(21,"p"),c._uU(22),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"ion-card"),c.TgZ(24,"ion-card-header"),c.TgZ(25,"ion-card-title"),c._uU(26,"Valutazione"),c.qZA(),c.qZA(),c.TgZ(27,"ion-card-content",0),c.TgZ(28,"ion-list"),c.TgZ(29,"ion-item"),c.TgZ(30,"ion-label",1),c._uU(31," Location "),c.qZA(),c.TgZ(32,"ion-label"),c._UZ(33,"ionic-rating-component",2,3),c.qZA(),c.qZA(),c.TgZ(35,"ion-item"),c.TgZ(36,"ion-label",1),c._uU(37," Servizio "),c.qZA(),c.TgZ(38,"ion-label"),c._UZ(39,"ionic-rating-component",2,3),c.qZA(),c.qZA(),c.TgZ(41,"ion-item"),c.TgZ(42,"ion-label",1),c._uU(43," Men\xf9 "),c.qZA(),c.TgZ(44,"ion-label"),c._UZ(45,"ionic-rating-component",2,3),c.qZA(),c.qZA(),c.TgZ(47,"ion-item"),c.TgZ(48,"ion-label",1),c._uU(49," Conto "),c.qZA(),c.TgZ(50,"ion-label"),c._UZ(51,"ionic-rating-component",2,3),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(53,"ion-card"),c.TgZ(54,"ion-card-header"),c.TgZ(55,"ion-card-title"),c._uU(56,"Foto"),c.qZA(),c.qZA(),c.TgZ(57,"ion-card-content"),c.TgZ(58,"ion-slides",4),c.YNc(59,g,2,1,"ion-slide",5),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&a&&(c.xp6(3),c.Oqu(null==i.restaurant?null:i.restaurant.name),c.xp6(13),c.AsE("",null==i.restaurant?null:i.restaurant.address," - ",null==i.restaurant?null:i.restaurant.city,""),c.xp6(6),c.Oqu(null==i.restaurant?null:i.restaurant.country),c.xp6(11),c.Q6J("rating",(null==i.restaurant?null:i.restaurant.ratings.location)/2),c.xp6(6),c.Q6J("rating",(null==i.restaurant?null:i.restaurant.ratings.service)/2),c.xp6(6),c.Q6J("rating",(null==i.restaurant?null:i.restaurant.ratings.menu)/2),c.xp6(6),c.Q6J("rating",(null==i.restaurant?null:i.restaurant.ratings.price)/2),c.xp6(7),c.Q6J("options",i.slideOpts),c.xp6(1),c.Q6J("ngForOf",null==i.restaurant?null:i.restaurant.images))},directives:[r.Gu,r.sr,r.wd,r.W2,r.PM,r.Zi,r.gZ,r.FN,r.q_,r.Ie,r.Q$,o.P3,r.Hr,t.sg,r.A$],styles:[".ratings-cnt[_ngcontent-%COMP%]   .font-bold[_ngcontent-%COMP%]{font-weight:700}"]}),a})()}];let Z=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[[l.Bz.forChild(u)],l.Bz]}),a})(),d=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[[t.ez,e.u5,r.Pc,o.tm,Z]]}),a})()}}]);