class Affiliateambassadorteam_RQ_Feature{
	static class_prefix = `affiliateambassadorteam_com__`
	static main_warpper_id = "affiliateambassadorteam_com__review_module_"
	
	static styles = `
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css"
	        integrity="sha512-nNlU0WK2QfKsuEmdcTwkeh+lhGs6uyOxuUs+n+0oXSYDok5qy0EI0lt01ZynHq6+p/tbgpZ7P+yUb+r71wqdXg=="
	        crossorigin="anonymous" referrerpolicy="no-referrer" />
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
	    <title>Document</title>
	  <style>
	    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");


	#${this.main_warpper_id} a {
	    text-decoration: none;
	}

	#${this.main_warpper_id} .${this.class_prefix}flex_ {
	    display: flex;
	}

	.flex_space {
	    justify-content: space-between;
	}

	.flex_end {
	    justify-content: flex-end;
	}

	.flex_center {
	    justify-content: center;
	}

	.align_center {
	    align-items: center;
	}

	.flex_wrap {
	    flex-wrap: wrap;
	}

	.gap-1 {
	    gap: 5px;
	}

	.gap-2 {
	    gap: 10px;
	}

	.gap-3 {
	    gap: 15px;
	}

	.gap-4 {
	    gap: 40px;
	}

	.list {
	    padding: 0;
	    margin: 0;
	    list-style: none;
	}

	.grid {
	    display: grid;
	}

	.grid_4 {
	    grid-template-columns: repeat(4, 1fr);
	}

	.m-0 {
	    margin: 0;
	}

	.my-2 {
	    margin-top: 1rem;
	    margin-bottom: 1rem;
	}

	.d-none {
	    display: none;
	}

	.btn {
	    padding: 0.6rem 1rem;
	    border-radius: 0.3rem;
	    border: 1px solid #ddd;
	    background: var(--primary);
	    color: #fff;
	    transition: 0.3s;
	}

	.btn:hover {
	    background: var(--secondary);
	}

	.reviewSection,
	.modalBox {
	    font-family: "Poppins", sans-serif;
	    font-size: 15px;
	}

	.reviewSection__heading {
	    padding: 1rem 1rem;
	    background: #e8fdff;
	    text-align: center;
	}

	.reviewSection__heading h2 {
	    font-size: 3rem;
	}

	.startlist i {
	    font-size: 1.2rem;
	    color: #707070;
	}

	.startlist li.active i {
	    color: #1a73e8;
	}

	.reviewSection__Body {
	    width: 60%;
	    margin: 2rem auto;
	}

	.reviewSection__Body--box {
	    margin-bottom: 1rem;
	    padding-bottom: 1rem;
	    border-bottom: 1px solid #ddd;
	}

	.reviewSection__Body--box>.left {
	    text-align: center;
	}

	.reviewSection__Body--box>.left h2 {
	    font-size: 2rem;
	    margin: 0;
	    color: #6b6d76;
	}

	.ratingList li {
	    display: flex;
	    align-items: center;
	    gap: 1rem;
	}

	.ratingList li div {
	    position: relative;
	    width: 10rem;
	    height: 0.4rem;
	    background: #ebebeb;
	}

	.ratingList {
	    margin-top: 1rem;
	}

	.ratingList li span {
	    background: #1a73e8;
	    position: absolute;
	    height: 100%;
	    left: 0;
	}

	.ratingList li.w-90 span {
	    width: 90%;
	}

	.ratingList li.w-80 span {
	    width: 80%;
	}

	.ratingList li.w-70 span {
	    width: 70%;
	}

	.ratingList li.w-60 span {
	    width: 60%;
	}

	.ratingList li.w-50 span {
	    width: 50%;
	}

	.ratingList li.w-40 span {
	    width: 40%;
	}

	.ratingList li.w-30 span {
	    width: 30%;
	}

	.ratingList li.w-20 span {
	    width: 20%;
	}

	.ratingList li.w-10 span {
	    width: 10%;
	}

	.ratingList li.w-0 span {
	    width: 0%;
	}

	.tab .tab__head li {
	    padding: 0.4rem 1rem;
	    cursor: pointer;
	    background: #000;
	}

	li.btn.active {
	    box-shadow: 0 0 0.6rem #1a73e8;
	    border: 1px solid #1a73e8;
	    background: #1a73e8;
	}

	.tabBodyBox {
	    max-height: 0px;
	    overflow: hidden;
	    transition: 0.7s;
	}

	#Reviews {
	    max-height: max-content;
	}

	.tab__head {
	    margin-bottom: 1rem;
	    padding-bottom: 1rem;
	    border-bottom: 1px solid #ddd;
	}

	.tabBodyBox .filter {
	    font-size: 2rem;
	    color: #6b6d76;
	    margin: 0;
	    margin-bottom: 0.5rem;
	}

	.searchBox {
	    position: relative;
	    width: 60%;
	}

	.searchBox i {
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 0;
	    color: #fff;
	    z-index: 1;
	    height: 100%;
	    width: 2.5rem;
	    display: grid;
	    place-items: center;
	    border-radius: 0.3rem 0 0 0.3rem;
	    background: var(--primary);
	}

	.searchBox input {
	    position: relative;
	    width: 100%;
	    height: 2.5rem;
	    background: #fff;
	    border: 1px solid #ddd;
	    border-radius: 0.3rem;
	    padding-left: 3rem;
	}


	.imgBox li img {
	    border-radius: 0.2rem;
	    width: 100%;
	}







	.rati {
	    gap: 2rem;
	}

	.rati .dropdown {
	    width: 100%;
	    position: relative;
	}

	.rati .dropdown .btn {
	    width: 100%;
	}

	.btn.btn-secondary {
	    background: transparent;
	    color: #000;
	    border-color: var(--primary);
	}

	.dropdown-menu {
	    border: 1px solid #ddd;
	    position: absolute;
	    z-index: 9;
	    background: #fff;
	    width: 98%;
	    left: 0;
	    right: 0;
	    margin: 0 auto;
	}

	.dropdown-item {
	    padding: 10px;
	    position: relative;
	    display: block;
	    color: #000;
	    font-size: 0.9rem;
	}

	.dropdown-item+.dropdown-item {
	    border-top: 1px solid #ddd;
	}

	.dropdown {
	    position: relative;
	}

	.tabBodyBox__inner {
	    border-top: 1px solid #ddd;
	    margin-top: 1rem;
	    padding-top: 1rem;
	}

	.tabBodyBox__inner .dropdown .btn {
	    min-width: 10rem;
	}

	.revicount {
	    color: #1a73e8;
	}

	.profileBox {
	    gap: 1rem;
	}

	.profileBox__img {
	    min-width: 4rem;
	    min-height: 4rem;
	    max-width: 4rem;
	    max-height: 4rem;
	    background: #ababab;
	    display: grid;
	    place-items: center;
	    border-radius: 50%;
	    font-weight: 600;
	    font-size: 1.3rem;
	    border: 1px solid #1a73e8;
	}

	.profileBox__Body {
	    width: 100%;
	}

	.profileBox__Body h5 span {
	    font-weight: 400;
	    color: #1a73e8;
	}

	.profileBox {
	    padding: 1rem 0;
	    border-bottom: 1px solid #ddd;
	    margin: 1rem 0;
	    border-top: 1px solid;
	}

	p a {
	    color: var(--primary);
	}

	.likeclick a {
	    color: var(--primary);
	}

	.questionBox .profileBox {
	    border-top: transparent;
	    border-bottom: transparent;
	    padding-top: 0;
	    margin-top: 0;
	}

	.questionBox__answerhe {
	    margin-bottom: 1rem;
	    color: #ababab;
	    /* font-size: 1.1rem; */
	}

	.questionBox__answer-Box {
	    padding-left: 4rem;
	    padding-top: 2rem;
	    margin-left: 2rem;
	    border-left: 2px solid #000;
	    padding-bottom: 1rem;
	    border-bottom: 2px solid #000;
	}

	#border-pagination {
	    margin: 2rem auto 0;
	    padding: 0;
	    display: flex;
	    justify-content: center;
	}

	#border-pagination li {
	    display: inline;
	}

	#border-pagination li a {
	    display: block;
	    text-decoration: none;
	    color: #000;
	    padding: 5px 10px;
	    border: 1px solid #ddd;
	    float: left;
	}

	#border-pagination li a {
	    -webkit-transition: background-color 0.4s;
	    transition: background-color 0.4s;
	}

	#border-pagination li a.active {
	    background-color: var(--primary);
	    color: #fff;
	}

	#border-pagination li a:hover:not(.active) {
	    background: #ddd;
	}

	.sharebtndisplay li {
	    border-left: 1px solid #a5a5a5;
	    padding-left: 0.7rem;
	    margin-left: 0.7rem;
	    color: #000;
	}

	.sharebtndisplay li a {
	    color: #000;
	}

	.swiper {
	    width: 100%;
	    height: 100%;
	}

	.swiper-slide {
	    text-align: center;
	    font-size: 18px;
	    background: #fff;

	    /* Center slide text vertically */
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	}

	.swiper-slide img {
	    display: block;
	    width: 100%;
	    height: 100%;
	    object-fit: cover;
	}

	.swiper-pagination-bullet {
	    width: 20px;
	    height: 20px;
	    text-align: center;
	    line-height: 20px;
	    font-size: 12px;
	    color: #000;
	    opacity: 1;
	    background: rgba(0, 0, 0, 0.2);
	}

	.swiper-pagination-bullet-active {
	    color: #fff;
	    background: #007aff;
	}

	.modalBox .left,
	.modalBox .right {
	    width: 50%;
	}

	.modalBox img {
	    width: 100%;
	}

	.modalBox {
	    gap: 2rem;
	}

	.fancybox-content {
	    width: 67%;
	    margin: 0 auto;
	    left: 0;
	    right: 0;
	}

	@media only screen and (max-width: 979px) {
	    .reviewSection__Body {
	        width: 95%;
	    }

	    .fancybox-content {
	        width: 80%;
	    }

	    .reviewSection, .modalBox {
	        font-size: 14px;
	    }

	    .reviewSection__Body--box {
	        flex-wrap: wrap;
	    }
	}

	@media only screen and (max-width: 768px) {
	    .fancybox-content {
	        width: 97%;
	        padding: 3rem 1rem;
	    }

	    .sharebtndisplay li {
	        padding-left: 0.3rem;
	        margin-left: 0.1rem;
	    }

	    .modalBox {
	        flex-direction: column;
	    }

	    .modalBox .left, .modalBox .right {
	        width: 100%;
	    }


	}

	@media only screen and (max-width: 461px) {
	    ul.imgBox {
	        grid-template-columns: repeat(2, 1fr);
	        gap: 0.4rem 0.8rem;
	    }

	    .questionBox__answer-Box {
	        padding-left: 1rem;
	        margin-left: 0rem;
	    }

	    h5 {
	        font-size: 1rem;
	    }
	    .searchBox {
	        width: 100%;
	    }
	}
	@media only screen and (max-width: 400px) {
	   .ratingList b {
	        line-height: 1.2;
	    }
	    .ratingList li div {
	        width: 8rem;
	    }
	}
	  </style>`


	  static scripts = `
	  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
	        integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA=="
	        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	    <!-- Initialize Swiper -->
	    <script>
	        var swiper = new Swiper(".mySwiper", {
	            pagination: {
	                el: ".swiper-pagination",
	                clickable: true,
	                renderBullet: function (index, className) {
	                    return (
	                        '<span class="' +
	                        className +
	                        '">' +
	                        (index + 1) +
	                        "</span>"
	                    );
	                },
	            },
	        });
	    </script>
	    <script>
	        $(".tab__head li").click(function (e) {
	            e.preventDefault();
	            $(".tab__head li").removeClass("active");
	            $(this).addClass("active");
	            var className = $(this).attr("data-class");
	            $(".tabBodyBox").css("maxHeight", "0");
	            $(".tabBodyBox").removeClass("active");
	            $("#" + className).addClass("active");
	            let tabliactive = document.querySelector(".tabBodyBox.active");
	            $(tabliactive).css(
	                "maxHeight",
	                tabliactive.scrollHeight + "px"
	            );
	        });
    	</script>

	    <script>
	        $(".dropdown-menu .dropdown-item").click(function (e) {
	            e.preventDefault();
	            var val = $(this).html();
	            $(this).parent().siblings("btn").html("");
	            $(this).parent().siblings(".btn").children("span").html("");
	            $(this).parent().siblings(".btn").children("span").html(val);
	            $(".dropdown-menu").slideUp();
	        });
	        $(".dropdown .btn").click(function () {
	            $(this).siblings(".dropdown-menu").slideToggle();
	        });
	        $(".sharebtn").click(function (e) {
	            e.preventDefault();
	            $(this).siblings(".sharebtndisplay").slideToggle();
	        });
	        $(".countup").click(function (e) {
	            e.preventDefault();
	            //     var a = $(this).children("span").html();
	            //    var ab = parseInt(a );
	            //    $(this).children("span").html(ab + 1);
	        });
	        $(".countdown").click(function (e) {
	            e.preventDefault();
	            //     var a = $(this).children("span").html();
	            //    var ab = parseInt(a);
	            //    $(this).children("span").html(ab + 1);
	        });
	        $("a#inline").fancybox({
	            hideOnContentClick: true,
	        });
	        $("a.conn_img").fancybox({
	            transitionIn: "elastic",
	            transitionOut: "elastic",
	            speedIn: 600,
	            speedOut: 200,
	            overlayShow: false,
	        });
	    </script>
	  `


	static init(targetDomElementId){
		const head = document.querySelector("head")
		const body = document.querySelector("body")
		head.insertAdjacentHTML("beforeend", this.styles)
		

		const html = `
			<div id="${this.main_warpper_id}">
				<div class="${this.class_prefix}reviewSection">
		        <div class="${this.class_prefix}reviewSection__heading">
		            <h2>Reviews</h2>
		        </div>
		        <div class="reviewSection__Body">
		            <div class="${this.class_prefix}reviewSection__Body--box ${this.class_prefix}flex_ flex_space">
		                <div class="left">
		                    <div class="flex_ gap-4 align_center">
		                        <div>
		                            <h2>5.0</h2>
		                            <ul class="list flex_ startlist flex_center gap-1">
		                                <li class="active">
		                                    <i class="fa-solid fa-star"></i>
		                                </li>
		                                <li class="active">
		                                    <i class="fa-solid fa-star"></i>
		                                </li>
		                                <li class="active">
		                                    <i class="fa-solid fa-star"></i>
		                                </li>
		                                <li class="active">
		                                    <i class="fa-solid fa-star"></i>
		                                </li>
		                                <li><i class="fa-solid fa-star"></i></li>
		                            </ul>
		                            <div>
		                                <b>535</b> <span>Reviews</span> | <b>7</b>
		                                <span>Q&As</span>
		                            </div>
		                        </div>
		                        <div>
		                            <ul class="list ratingList">
		                                <li class="w-80">
		                                    <b>5</b>
		                                    <div><span></span></div>
		                                </li>
		                                <li class="w-60">
		                                    <b>4</b>
		                                    <div><span></span></div>
		                                </li>
		                                <li class="w-40">
		                                    <b>3</b>
		                                    <div><span></span></div>
		                                </li>
		                                <li class="w-20">
		                                    <b>2</b>
		                                    <div><span></span></div>
		                                </li>
		                                <li class="w-0">
		                                    <b>1</b>
		                                    <div><span></span></div>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                </div>
		                <div class="right">
		                    <a href="#" class="btn flex_ gap-1 align_center">
		                    	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>
		                    	<span>Ask A Question</span>
		                    </a>
		                </div>
		            </div>
		            <div class="reviewSection__Body--box2">
		                <div class="tab">
		                    <div class="tab__head">
		                        <ul class="list flex_ gap-2">
		                            <li class="btn active" data-class="Reviews">
		                                Reviews
		                            </li>
		                            <li class="btn" data-class="Questions">
		                                Questions
		                            </li>
		                        </ul>
		                    </div>
		                    <div class="tab__body">
		                        <div class="tabBodyBox" id="Reviews">
		                            <h6 class="filter">Filter Reviews</h6>
		                            <div class="searchBox">
		                                <i class="fa-solid fa-magnifying-glass"></i>
		                                <input type="search" placeholder="Search Reviews" class="searchBox-input"
		                                    maxlength="120" />
		                            </div>
		                            <br />
		                            <div class="flex_ rati">
		                                <div class="dropdown rating">
		                                    <button class="btn btn-secondary flex_ align_center flex_space gap-1">
		                                        <span>Rating</span>
		                                        <i class="fa-solid fa-chevron-down"></i>
		                                    </button>
		                                    <div class="dropdown-menu d-none">
		                                        <a class="dropdown-item" href="#">All</a>
		                                        <a class="dropdown-item" href="#">
		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </a>
		                                        <a class="dropdown-item" href="#">
		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </a>
		                                        <a class="dropdown-item" href="#">
		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </a>
		                                        <a class="dropdown-item" href="#">
		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </a>
		                                        <a class="dropdown-item" href="#">
		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </a>
		                                    </div>
		                                </div>
		                                <div class="dropdown imagevideo">
		                                    <button class="btn btn-secondary flex_ align_center flex_space gap-1">
		                                        <span>Images & Videos</span>
		                                        <i class="fa-solid fa-chevron-down"></i>
		                                    </button>
		                                    <div class="dropdown-menu d-none">
		                                        <a class="dropdown-item" href="#"><b>All</b></a>
		                                        <a class="dropdown-item" href="#">With Images & Videos</a>
		                                    </div>
		                                </div>
		                            </div>
		                            <div class="tabBodyBox__inner">
		                                <div class="flex_ flex_space align_center">
		                                    <h4 class="m-0 revicount">
		                                        535 Reviews
		                                    </h4>
		                                    <div class="dropdown">
		                                        <button class="btn btn-secondary flex_ align_center flex_space gap-1">
		                                            <span> Dropdown button</span>
		                                            <i class="fa-solid fa-chevron-down"></i>
		                                        </button>
		                                        <div class="dropdown-menu d-none">
		                                            <a class="dropdown-item" href="#">Newest</a>
		                                            <a class="dropdown-item" href="#">Highest Rating</a>
		                                            <a class="dropdown-item" href="#">Lowest Rating</a>
		                                            <a class="dropdown-item" href="#">Most Votes</a>
		                                            <a class="dropdown-item" href="#">Least Votes</a>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div class="tabBodyBox__inner-Box">
		                                    <div class="profileBox flex_ align_center">
		                                        <div class="profileBox__img">J</div>
		                                        <div class="profileBox__Body">
		                                            <div class="flex_ flex_space align_center flex_wrap">
		                                                <h5 class="m-0">
		                                                    Jason
		                                                    <span>Verified
		                                                        Buyer</span>
		                                                </h5>
		                                                <b>03/04/22</b>
		                                            </div>

		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                    <!-- close profileBox  -->
		                                    <h4 class="m-0">Top Notch Coatin</h4>
		                                    <p>
		                                        This stuff is the shit!! That’s the
		                                        best way I can describe it. Lays
		                                        down easy, has a long flash time,
		                                        and the results are out of this
		                                        world! Not only is the coating top
		                                        notch but their customer service is
		                                        just as awesome. Super fast shipping
		                                        and if you have any issues
		                                        whatsoever they’re quick to get it
		                                        resolved. I can’t think of any
		                                        reason to use...
		                                        <a href="#">Read More</a>
		                                    </p>
		                                    <ul class="list imgBox grid grid_4 gap-4 my-2">
		                                        <li>
		                                            <a href="#inline1" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline1">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline2" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline2">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline3" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline3">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline4" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline4">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                    </ul>
		                                    <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                        <li class="flex_ align_center flex_wrap gap-2">
		                                            <a href="#" class="sharebtn">
		                                                <i class="fa-regular fa-share-from-square"></i>
		                                                <span>Share</span></a>
		                                            <div class="sharebtndisplay d-none">
		                                                <ul class="list flex_ gap-1">
		                                                    <li>
		                                                        <a href="#">Facebook</a>
		                                                    </li>
		                                                    <li>
		                                                        <a href="#">Twitter</a>
		                                                    </li>
		                                                    <li>
		                                                        <a href="#">Linkdin</a>
		                                                    </li>
		                                                </ul>
		                                            </div>
		                                        </li>
		                                        <li class="flex_ align_center flex_wrap gap-2">
		                                            <p class="m-0">
		                                                Was This Review Helpful?
		                                            </p>
		                                            <ul class="list flex_ align_center gap-1">
		                                                <li>
		                                                    <a href="#" class="countup"><i class="fa-solid fa-thumbs-up"></i>
		                                                        <span>0</span></a>
		                                                </li>
		                                                <li>
		                                                    <a href="#" class="countdown"><i
		                                                            class="fa-solid fa-thumbs-down"></i>
		                                                        <span>0</span></a>
		                                                </li>
		                                            </ul>
		                                        </li>
		                                    </ul>
		                                </div>
		                                <div class="tabBodyBox__inner-Box">
		                                    <div class="profileBox flex_ align_center">
		                                        <div class="profileBox__img">J</div>
		                                        <div class="profileBox__Body">
		                                            <div class="flex_ flex_space align_center flex_wrap">
		                                                <h5 class="m-0">
		                                                    Jason
		                                                    <span>Verified
		                                                        Buyer</span>
		                                                </h5>
		                                                <b>03/04/22</b>
		                                            </div>

		                                            <ul class="list flex_ startlist gap-1">
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li class="active">
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                                <li>
		                                                    <i class="fa-solid fa-star"></i>
		                                                </li>
		                                            </ul>
		                                        </div>
		                                    </div>
		                                    <!-- close profileBox  -->
		                                    <h4 class="m-0">Top Notch Coatin</h4>
		                                    <p>
		                                        This stuff is the shit!! That’s the
		                                        best way I can describe it. Lays
		                                        down easy, has a long flash time,
		                                        and the results are out of this
		                                        world! Not only is the coating top
		                                        notch but their customer service is
		                                        just as awesome. Super fast shipping
		                                        and if you have any issues
		                                        whatsoever they’re quick to get it
		                                        resolved. I can’t think of any
		                                        reason to use...
		                                        <a href="#">Read More</a>
		                                    </p>
		                                    <ul class="list imgBox grid grid_4 gap-4 my-2">
		                                        <li>
		                                            <a href="#inline1" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline1">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline2" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline2">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline3" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline3">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <a href="#inline4" class="conn_img">
		                                                <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
		                                                    alt="" /></a>
		                                            <div class="d-none" id="inline4">
		                                                <div class="modalBox flex_">
		                                                    <div class="left">
		                                                        <div class="swiper mySwiper">
		                                                            <div class="swiper-wrapper">
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                                <div class="swiper-slide">
		                                                                    <img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
		                                                                        alt="" />
		                                                                </div>
		                                                            </div>
		                                                            <div class="swiper-pagination"></div>
		                                                        </div>
		                                                    </div>
		                                                    <div class="right">
		                                                        <div class="tabBodyBox__inner-Box">
		                                                            <div class="profileBox flex_ align_center">
		                                                                <div class="profileBox__img">
		                                                                    J
		                                                                </div>
		                                                                <div class="profileBox__Body">
		                                                                    <div class="flex_ flex_space align_center flex_wrap">
		                                                                        <h5 class="m-0">
		                                                                            Jason
		                                                                            <span>Verified
		                                                                                Buyer</span>
		                                                                        </h5>
		                                                                        <b>03/04/22</b>
		                                                                    </div>

		                                                                    <ul class="list flex_ startlist gap-1">
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li class="active">
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                        <li>
		                                                                            <i class="fa-solid fa-star"></i>
		                                                                        </li>
		                                                                    </ul>
		                                                                </div>
		                                                            </div>
		                                                            <!-- close profileBox  -->
		                                                            <h4 class="m-0">
		                                                                Top Notch
		                                                                Coatin
		                                                            </h4>
		                                                            <p>
		                                                                This stuff
		                                                                is the
		                                                                shit!!
		                                                                That’s the
		                                                                best way I
		                                                                can describe
		                                                                it. Lays
		                                                                down easy,
		                                                                has a long
		                                                                flash time,
		                                                                and the
		                                                                results are
		                                                                out of this
		                                                                world! Not
		                                                                only is the
		                                                                coating top
		                                                                notch but
		                                                                their
		                                                                customer
		                                                                service is
		                                                                just as
		                                                                awesome.
		                                                                Super fast
		                                                                shipping and
		                                                                if you have
		                                                                any issues
		                                                                whatsoever
		                                                                they’re
		                                                                quick to get
		                                                                it resolved.
		                                                                I can’t
		                                                                think of any
		                                                                reason to
		                                                                use... >
		                                                            </p>

		                                                            <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <a href="#" class="sharebtn">
		                                                                        <i class="fa-regular fa-share-from-square"></i>
		                                                                        <span>Share</span></a>
		                                                                    <div class="sharebtndisplay d-none">
		                                                                        <ul class="list flex_ gap-1">
		                                                                            <li>
		                                                                                <a href="#">Facebook</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Twitter</a>
		                                                                            </li>
		                                                                            <li>
		                                                                                <a href="#">Linkdin</a>
		                                                                            </li>
		                                                                        </ul>
		                                                                    </div>
		                                                                </li>
		                                                                <li class="flex_ align_center flex_wrap gap-2">
		                                                                    <p class="m-0">
		                                                                        Was
		                                                                        This
		                                                                        Review
		                                                                        Helpful?
		                                                                    </p>
		                                                                    <ul class="list flex_ align_center gap-1">
		                                                                        <li>
		                                                                            <a href="#" class="countup"><i
		                                                                                    class="fa-solid fa-thumbs-up"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                        <li>
		                                                                            <a href="#" class="countdown"><i
		                                                                                    class="fa-solid fa-thumbs-down"></i>
		                                                                                <span>0</span></a>
		                                                                        </li>
		                                                                    </ul>
		                                                                </li>
		                                                            </ul>
		                                                        </div>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </li>
		                                    </ul>
		                                    <ul class="list flex_ likeclick flex_space align_center flex_wrap">
		                                        <li class="flex_ align_center flex_wrap gap-2">
		                                            <a href="#" class="sharebtn">
		                                                <i class="fa-regular fa-share-from-square"></i>
		                                                <span>Share</span></a>
		                                            <div class="sharebtndisplay d-none">
		                                                <ul class="list flex_ gap-1">
		                                                    <li>
		                                                        <a href="#">Facebook</a>
		                                                    </li>
		                                                    <li>
		                                                        <a href="#">Twitter</a>
		                                                    </li>
		                                                    <li>
		                                                        <a href="#">Linkdin</a>
		                                                    </li>
		                                                </ul>
		                                            </div>
		                                        </li>
		                                        <li class="flex_ align_center flex_wrap gap-2">
		                                            <p class="m-0">
		                                                Was This Review Helpful?
		                                            </p>
		                                            <ul class="list flex_ align_center gap-1">
		                                                <li>
		                                                    <a href="#" class="countup"><i class="fa-solid fa-thumbs-up"></i>
		                                                        <span>0</span></a>
		                                                </li>
		                                                <li>
		                                                    <a href="#" class="countdown"><i
		                                                            class="fa-solid fa-thumbs-down"></i>
		                                                        <span>0</span></a>
		                                                </li>
		                                            </ul>
		                                        </li>
		                                    </ul>
		                                </div>
		                                <ul id="border-pagination">
		                                    <li><a class="" href="#">«</a></li>
		                                    <li><a href="#">1</a></li>
		                                    <li>
		                                        <a href="#" class="active">2</a>
		                                    </li>
		                                    <li><a href="#">3</a></li>
		                                    <li><a href="#">4</a></li>
		                                    <li><a href="#">5</a></li>
		                                    <li><a href="#">6</a></li>
		                                    <li><a href="#">7</a></li>
		                                    <li><a href="#">»</a></li>
		                                </ul>
		                            </div>
		                        </div>
		                        <div class="tabBodyBox" id="Questions">
		                            <div class="questionBox">
		                                <div class="profileBox flex_ align_center">
		                                    <div class="profileBox__img">J</div>
		                                    <div class="profileBox__Body">
		                                        <div class="flex_ flex_space align_center flex_wrap">
		                                            <h5 class="m-0">
		                                                Tom
		                                                <span>Verified Buyer</span>
		                                            </h5>
		                                            <b>03/04/22</b>
		                                        </div>
		                                        <b><span>Q: </span> Does this work
		                                            on glass also?</b>
		                                    </div>
		                                </div>
		                                <!-- close profileBox  -->
		                                <div class="questionBox__answer">
		                                    <div class="questionBox__answerhe">
		                                        <i class="fa-solid fa-message"></i>
		                                        Answer (<span>0</span>)
		                                    </div>
		                                    <div class="questionBox__answer-Box">
		                                        <div class="profileBox flex_ align_center">
		                                            <div class="profileBox__img">
		                                                J
		                                            </div>
		                                            <div class="profileBox__Body">
		                                                <div class="flex_ flex_space align_center flex_wrap">
		                                                    <h5 class="m-0">
		                                                        Jason
		                                                        <span>Verified
		                                                            Buyer</span>
		                                                    </h5>
		                                                    <b>03/04/22</b>
		                                                </div>

		                                                <p>
		                                                    A: Absolutely looks
		                                                    beautiful. Time will
		                                                    tell on the length of
		                                                    gloss.
		                                                </p>
		                                            </div>
		                                        </div>
		                                        <ul class="list flex_ likeclick flex_end align_center">
		                                            <li class="flex_ align_center flex_wrap gap-2">
		                                                <p class="m-0">
		                                                    Was This Review Helpful?
		                                                </p>
		                                                <ul class="list flex_ align_center gap-1">
		                                                    <li>
		                                                        <a href="#" class="countup"><i
		                                                                class="fa-solid fa-thumbs-up"></i>
		                                                            <span>0</span></a>
		                                                    </li>
		                                                    <li>
		                                                        <a href="#" class="countdown"><i
		                                                                class="fa-solid fa-thumbs-down"></i>
		                                                            <span>0</span></a>
		                                                    </li>
		                                                </ul>
		                                            </li>
		                                        </ul>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
			</div>
			`

		const targetPlace = document.getElementById(targetDomElementId)
		targetPlace.innerHTML = html

		body.insertAdjacentHTML("beforeend", this.scripts)
	}

	static postReview(){

	}

	static askAQuestion(){
		
	}
}

