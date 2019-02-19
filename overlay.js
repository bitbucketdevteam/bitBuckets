// JavaScript Document
//functions to update values//
    function tickB1() {
      document.getElementById("b1Count").innerHTML = g1b1Counter;
    };
    function fillB1() {
      document.getElementById("b1Fill").style.width = g1b1Progress + '%';
    };
    function tickB2() {
      document.getElementById("b2Count").innerHTML = g1b2Counter;
    };
    function fillB2() {
      document.getElementById("b2Fill").style.width = g1b2Progress + '%';
    };
	function tickB3() {
      document.getElementById("b3Count").innerHTML = g1b3Counter;
    };
    function fillB3() {
      document.getElementById("b3Fill").style.width = g1b3Progress + '%';
    };
	

	


    function moveB1() {
      g1b1Progress = g1b1Progress + (amount/full*100);
      if (g1b1Progress == 100 ) {
        g1b1Counter++;
      };
      if (g1b1Progress > 100) {
        g1b1Progress = g1b1Progress-100;
      }; 
    };
    function moveB2() {
      g1b2Progress = g1b2Progress + (amount/full*100);
      if (g1b2Progress == 100) {
        g1b2Counter++;
      };
      if (g1b2Progress > 100) {
        g1b2Progress=g1b2Progress-100; 
      }; 
    };
	function moveB3() {
      g1b3Progress = g1b3Progress + (amount/full*100);
      if (g1b3Progress == 100) {
        g1b3Counter++;
      };
      if (g1b3Progress > 100) {
        g1b3Progress=g1b3Progress-100; 
      }; 
    };
//only pull new values on interval to reduce traffic(1/sec by default)//
    setInterval ( function update() {
      tickB1();
      tickB2(); 
	  tickB3();
      fillB1();
      fillB2();
      fillB3();
    },1000);