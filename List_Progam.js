//Tạo dộ rộng cho cot khi độ rộng màn hình thay đổi
        var MaxNumCol = 8;
        var MinNumCol = 2;
        var NameClassCol = "column";
        var ww = screen.width;
        var wi = window.innerWidth;
        var elem = document.documentElement;
		
        //Định nghĩa viết tắt cho element
        function ECN(NameClass, pos) {return document.getElementsByClassName(NameClass)[pos];}
        function ECN_Array(NameClass, pos) {return document.getElementsByClassName(NameClass);}
        function ETN(NameTag, pos) {return document.getElementsByTagName(NameTag)[pos];}
        function ETN_Array(NameTag, pos) {return document.getElementsByTagName(NameTag);}
        function EN(Name, pos) {return document.getElementsByName(Name)[pos];}
        function EN_Array(Name, pos) {return document.getElementsByName(Name);}
        function EID(NameID) {return document.getElementById(NameID);}
        // Kết thúc Định nghĩa viết tắt cho element

        //set properties for object
        function setStyle(el, propertyObject ) {
            for (var property in propertyObject) {
                el.style[property] = propertyObject[property];
            }
        }
        function setStyleAllClass(NameClass, propertyObject) {
            var el = ECN_Array(NameClass)
            for (i=0; i<el.length;i++) {
                setStyle(el[i], propertyObject);
            }

        }
        //set properties for object

        function displayWindowSize() {
            //openFullscreen();
            
            // Get width and height of the window excluding scrollbars
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            let vh = window.innerHeight * 0.01;


            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            //document.documentElement.style.setProperty('--vw', `${vw}px`);
            mobile();
            tablet();
            desktop();
        }

        mobile();
        function mobile(){

            const mql = window.matchMedia('screen and (max-width: 575px)');

            checkMedia(mql);
            mql.addListener(checkMedia);

            function checkMedia(mql){

                if(mql.matches){

                    setStyleAllClass("row", {"padding-top":"8vw", "padding-bottom": "10vw"});
                    setStyleAllClass(NameClassCol, {"width":"50%", "padding": "4vw", "height":"56vw"});
                    setStyleAllClass("item", {"height":"44vw"});
                    setStyleAllClass("Q01a", {"font-size":"32vw"});
                    setStyleAllClass("Q01b", {"height":"12vw","font-size":"3.2vw"});
                }
            }
        }

        

        tablet();
        function tablet(){

            const mql = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');

            checkMedia(mql);
            mql.addListener(checkMedia);

            function checkMedia(mql){

                if(mql.matches){
                    setStyleAllClass("row", {"padding-top":"4vw", "padding-bottom": "10vw"});
                    setStyleAllClass(NameClassCol, {"width":"25%", "padding": "2vw", "height":"28vw"});
                    setStyleAllClass("item", {"height":"22vw"});
                    setStyleAllClass("Q01a", {"font-size":"16vw"});
                    setStyleAllClass("Q01b", {"height":"6vw","font-size":"1.6vw"});
                }
            }
        }


        desktop();
        function desktop(){
            const mql = window.matchMedia('screen and (min-width: 992px)');
            checkMedia(mql);
            mql.addListener(checkMedia);
            function checkMedia(mql){
                if(mql.matches){

                    setStyleAllClass("row", {"padding-top":"5vh", "padding-bottom": "5vh"});
                    setStyleAllClass(NameClassCol, {"width":"12.5%", "padding": "1vw", "height":"14vw"});
                    setStyleAllClass("item", {"height":"11vw"});
                    setStyleAllClass("Q01a", {"font-size":"8vw"});
                    setStyleAllClass("Q01b", {"height":"3vw","font-size":"0.8vw"});
                }
            }
        }

       
        function preventPullToRefresh(element) {
			var prevent = false;

			document.querySelector(element).addEventListener('touchstart', function(e){
                if (e.touches.length !== 1) { 
                    openFullscreen();
                    return; 
                }

                var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                prevent = (scrollY === 0);
		    });

			document.querySelector(element).addEventListener('touchmove', function(e){
                if (prevent) {
                    prevent = false;
                    e.preventDefault();
                }
			});
		  }

          window.onbeforeunload = function() { return true; }

        //Disable get code
        //DISABLE RIGHT-CLICK
        document.addEventListener("contextmenu", function(e){
            e.preventDefault();
        }, false);

        //DISABLE “VIEW SOURCE” SHORTCUT KEY
        document.addEventListener("keydown", function(e){
        // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
        // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
        // THIS WILL ONLY DISABLE CONTROL AND F12
            if (e.ctrlKey || e.keyCode==123) {
                e.stopPropagation();
                e.preventDefault();
            }
        });

        window.addEventListener("load",function() {
            // Set a timeout...
            setTimeout(function(){
            // Hide the address bar!
                window.scrollTo(0, 1);
            }, 0);
        });
        //Disable get code

        function openFullscreen() {
			var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
			(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
			(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
			(document.msFullscreenElement && document.msFullscreenElement !== null);

			if (!isInFullScreen) {
				if (elem.requestFullscreen) {
					elem.requestFullscreen();
				} if (elem.mozRequestFullScreen) {
					elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullScreen) {
				   elem.webkitRequestFullScreen();
				} else if (elem.msRequestFullscreen) {
					elem.msRequestFullscreen();
				}
			}
        }

    
    // Attaching the event listener function to window's resize event
    window.addEventListener("resize", displayWindowSize);

        // Calling the function for the first time
    displayWindowSize();

    document.addEventListener("touchstart", function(e){
        if(event.touches.length > 1){
                //the event is multi-touch
                //you can then prevent the behavior
                event.preventDefault()
        } 
    },{passive: false});

    
    //window.addEventListener('orientationchange', function () { if (window.innerHeight > window.innerWidth) { document.getElementsByTagName('body')[0].style.transform = "rotate(90deg)"; } });

        
    preventPullToRefresh('html'); // pass #id or html tag into the method

 

    ECN(NameClassCol,0).addEventListener("click", function(e) {
        openSearch();
    });


    function openSearch() {
        setStyle(EID("myOverlay"), {'display': 'block'});
    }

    function closeSearch() {
        setStyle(EID("myOverlay"), {'display': 'none'});
    }
