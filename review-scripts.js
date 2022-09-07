class Affiliateambassadorteam_RQ_Feature{
	static main_warpper_id = "affiliateambassadorteam_com__review_module_"
	static attr_prefix = `affiliateambassadorteam_com__`
	static primaryColor = `#1a73e8`
	static secondaryColor = `#000`

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


		#${this.main_warpper_id} {
		    padding: 0;
		    margin: 0;
		}

		#${this.main_warpper_id} a {
		    text-decoration: none;
		}

		#${this.main_warpper_id} .${this.attr_prefix}flex_ {
		    display: flex;
		}

		#${this.main_warpper_id} .${this.attr_prefix}flex_space {
		    justify-content: space-between;
		}

		#${this.main_warpper_id} .${this.attr_prefix}flex_end {
		    justify-content: flex-end;
		}

		#${this.main_warpper_id} .${this.attr_prefix}flex_center {
		    justify-content: center;
		}

		#${this.main_warpper_id} .${this.attr_prefix}align_center {
		    align-items: center;
		}

		#${this.main_warpper_id} .${this.attr_prefix}flex_wrap {
		    flex-wrap: wrap;
		}

		#${this.main_warpper_id} .${this.attr_prefix}gap-1 {
		    gap: 5px;
		}

		#${this.main_warpper_id} .${this.attr_prefix}gap-2 {
		    gap: 10px;
		}

		#${this.main_warpper_id} .${this.attr_prefix}gap-3 {
		    gap: 15px;
		}

		#${this.main_warpper_id} .${this.attr_prefix}gap-4 {
		    gap: 40px;
		}

		#${this.main_warpper_id} .${this.attr_prefix}list {
		    padding: 0;
		    margin: 0;
		    list-style: none;
		}

		#${this.main_warpper_id} .${this.attr_prefix}grid {
		    display: grid;
		}

		#${this.main_warpper_id} .${this.attr_prefix}grid_4 {
		    grid-template-columns: repeat(4, 1fr);
		}

		#${this.main_warpper_id} .${this.attr_prefix}m-0 {
		    margin: 0;
		}

		#${this.main_warpper_id} .${this.attr_prefix}my-2 {
		    margin-top: 1rem;
		    margin-bottom: 1rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}d-none {
		    display: none;
		}

		#${this.main_warpper_id} .${this.attr_prefix}btn {
		    padding: 0.6rem 1rem;
		    border-radius: 0.3rem;
		    border: 1px solid #ddd;
		    background: ${this.primaryColor};
		    color: #fff;
		    transition: 0.3s;
		}

		#${this.main_warpper_id} .${this.attr_prefix}btn:hover {
		    background: ${this.secondaryColor};
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection,
		#${this.main_warpper_id} .${this.attr_prefix}modalBox {
		    font-family: "Poppins", sans-serif;
		    font-size: 15px;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__heading {
		    padding: 1rem 1rem;
		    background: #e8fdff;
		    text-align: center;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__heading h2 {
		    font-size: 3rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}startlist i {
		    font-size: 1.2rem;
		    color: #707070;
		}

		#${this.main_warpper_id} .${this.attr_prefix}startlist li.active i {
		    color: #1a73e8;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body {
		    width: 60%;
		    margin: 2rem auto;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body--box {
		    margin-bottom: 1rem;
		    padding-bottom: 1rem;
		    border-bottom: 1px solid #ddd;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body--box>.left {
		    text-align: center;
		}

		#${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body--box>.left h2 {
		    font-size: 2rem;
		    margin: 0;
		    color: #6b6d76;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li {
		    display: flex;
		    align-items: center;
		    gap: 1rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li div {
		    position: relative;
		    width: 10rem;
		    height: 0.4rem;
		    background: #ebebeb;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList {
		    margin-top: 1rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li span {
		    background: #1a73e8;
		    position: absolute;
		    height: 100%;
		    left: 0;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-90 span {
		    width: 90%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-80 span {
		    width: 80%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-70 span {
		    width: 70%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-60 span {
		    width: 60%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-50 span {
		    width: 50%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-40 span {
		    width: 40%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-30 span {
		    width: 30%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-20 span {
		    width: 20%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-10 span {
		    width: 10%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}ratingList li.w-0 span {
		    width: 0%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tab .${this.attr_prefix}tab__head li {
		    padding: 0.4rem 1rem;
		    cursor: pointer;
		    background: #000;
		}

		#${this.main_warpper_id} li.${this.attr_prefix}btn.${this.attr_prefix}active {
		    box-shadow: 0 0 0.6rem #1a73e8;
		    border: 1px solid #1a73e8;
		    background: #1a73e8;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tabBodyBox {
		    max-height: 0px;
		    overflow: visiable;
		    transition: 0.7s;
		}

		#${this.main_warpper_id} #${this.attr_prefix}Reviews {
		    max-height: max-content;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tab__head {
		    margin-bottom: 1rem;
		    padding-bottom: 1rem;
		    border-bottom: 1px solid #ddd;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tabBodyBox .${this.attr_prefix}filter {
		    font-size: 2rem;
		    color: #6b6d76;
		    margin: 0;
		    margin-bottom: 0.5rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}searchBox {
		    position: relative;
		    width: 100%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}searchBox i {
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
		    background: ${this.primaryColor};
		}

		#${this.main_warpper_id} .${this.attr_prefix}searchBox input {
		    position: relative;
		    width: 100%;
		    height: 2.5rem;
		    background: #fff;
		    border: 1px solid #ddd;
		    border-radius: 0.3rem;
		    padding-left: 3rem;
		}


		#${this.main_warpper_id} .${this.attr_prefix}imgBox li img {
		    border-radius: 0.2rem;
		    width: 100%;
		}







		#${this.main_warpper_id} .${this.attr_prefix}rati {
		    gap: 2rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}rati .${this.attr_prefix}dropdown {
		    width: 100%;
		    position: relative;
		}

		#${this.main_warpper_id} .${this.attr_prefix}rati .${this.attr_prefix}dropdown .${this.attr_prefix}btn {
		    width: 100%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}btn.${this.attr_prefix}btn-secondary {
		    background: transparent;
		    color: #000;
		    border-color: ${this.primaryColor};
		}

		#${this.main_warpper_id} .${this.attr_prefix}dropdown-menu {
		    border: 1px solid #ddd;
		    position: absolute;
		    z-index: 9;
		    background: #fff;
		    width: 98%;
		    left: 0;
		    right: 0;
		    margin: 0 auto;
		}

		#${this.main_warpper_id} .${this.attr_prefix}dropdown-item {
		    padding: 10px;
		    position: relative;
		    display: block;
		    color: #000;
		    font-size: 0.9rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}dropdown-item+.${this.attr_prefix}dropdown-item {
		    border-top: 1px solid #ddd;
		}

		#${this.main_warpper_id} .${this.attr_prefix}dropdown {
		    position: relative;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tabBodyBox__inner {
		    border-top: 1px solid #ddd;
		    margin-top: 1rem;
		    padding-top: 1rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}tabBodyBox__inner .${this.attr_prefix}dropdown .${this.attr_prefix}btn {
		    min-width: 10rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}revicount {
		    color: #1a73e8;
		}

		#${this.main_warpper_id} .${this.attr_prefix}profileBox {
		    gap: 1rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}profileBox__img {
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

		#${this.main_warpper_id} .${this.attr_prefix}profileBox__Body {
		    width: 100%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}profileBox__Body h5 span {
		    font-weight: 400;
		    color: #1a73e8;
		}

		#${this.main_warpper_id} .${this.attr_prefix}profileBox {
		    padding: 1rem 0;
		    border-bottom: 1px solid #ddd;
		    margin: 1rem 0;
		    border-top: 1px solid;
		}

		#${this.main_warpper_id} p a {
		    color: ${this.primaryColor};
		}

		#${this.main_warpper_id} .${this.attr_prefix}likeclick a {
		    color: ${this.primaryColor};
		}

		#${this.main_warpper_id} .${this.attr_prefix}questionBox .${this.attr_prefix}profileBox {
		    border-top: transparent;
		    border-bottom: transparent;
		    padding-top: 0;
		    margin-top: 0;
		}

		#${this.main_warpper_id} .${this.attr_prefix}questionBox__answerhe {
		    margin-bottom: 1rem;
		    color: #ababab;
		    /* font-size: 1.1rem; */
		}

		#${this.main_warpper_id} .${this.attr_prefix}questionBox__answer-Box {
		    padding-left: 4rem;
		    padding-top: 2rem;
		    margin-left: 2rem;
		    border-left: 2px solid #000;
		    padding-bottom: 1rem;
		    border-bottom: 2px solid #000;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination {
		    margin: 2rem auto 0;
		    padding: 0;
		    display: flex;
		    justify-content: center;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination li {
		    display: inline;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination li a {
		    display: block;
		    text-decoration: none;
		    color: #000;
		    padding: 5px 10px;
		    border: 1px solid #ddd;
		    float: left;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination li a {
		    -webkit-transition: background-color 0.4s;
		    transition: background-color 0.4s;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination li a.${this.attr_prefix}active {
		    background-color: ${this.primaryColor};
		    color: #fff;
		}

		#${this.main_warpper_id} #${this.attr_prefix}border-pagination li a:hover:not(.${this.attr_prefix}active) {
		    background: #ddd;
		}

		#${this.main_warpper_id} .${this.attr_prefix}sharebtndisplay li {
		    border-left: 1px solid #a5a5a5;
		    padding-left: 0.7rem;
		    margin-left: 0.7rem;
		    color: #000;
		}

		#${this.main_warpper_id} .${this.attr_prefix}sharebtndisplay li a {
		    color: #000;
		}

		#${this.main_warpper_id} .${this.attr_prefix}swiper {
		    width: 100%;
		    height: 100%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}swiper-slide {
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

		#${this.main_warpper_id} .${this.attr_prefix}swiper-slide img {
		    display: block;
		    width: 100%;
		    height: 100%;
		    object-fit: cover;
		}

		#${this.main_warpper_id} .${this.attr_prefix}swiper-pagination-bullet {
		    width: 20px;
		    height: 20px;
		    text-align: center;
		    line-height: 20px;
		    font-size: 12px;
		    color: #000;
		    opacity: 1;
		    background: rgba(0, 0, 0, 0.2);
		}

		#${this.main_warpper_id} .${this.attr_prefix}swiper-pagination-bullet-active {
		    color: #fff;
		    background: #007aff;
		}

		#${this.main_warpper_id} .${this.attr_prefix}modalBox .${this.attr_prefix}left,
		#${this.main_warpper_id} .${this.attr_prefix}modalBox .${this.attr_prefix}right {
		    width: 50%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}modalBox img {
		    width: 100%;
		}

		#${this.main_warpper_id} .${this.attr_prefix}modalBox {
		    gap: 2rem;
		}

		#${this.main_warpper_id} .${this.attr_prefix}fancybox-content {
		    width: 67%;
		    margin: 0 auto;
		    left: 0;
		    right: 0;
		}

		@media only screen and (max-width: 979px) {
		    #${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body {
		        width: 95%;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}fancybox-content {
		        width: 80%;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}reviewSection, 
		    #${this.main_warpper_id} .${this.attr_prefix}modalBox {
		        font-size: 14px;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}reviewSection__Body--box {
		        flex-wrap: wrap;
		    }
		}

		@media only screen and (max-width: 768px) {
		    #${this.main_warpper_id} .${this.attr_prefix}fancybox-content {
		        width: 97%;
		        padding: 3rem 1rem;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}sharebtndisplay li {
		        padding-left: 0.3rem;
		        margin-left: 0.1rem;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}modalBox {
		        flex-direction: column;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}modalBox .${this.attr_prefix}left, 
		    #${this.main_warpper_id} .${this.attr_prefix}modalBox .${this.attr_prefix}right {
		        width: 100%;
		    }


		}

		@media only screen and (max-width: 461px) {
		    #${this.main_warpper_id} ul.${this.attr_prefix}imgBox {
		        grid-template-columns: repeat(2, 1fr);
		        gap: 0.4rem 0.8rem;
		    }

		    #${this.main_warpper_id} .${this.attr_prefix}questionBox__answer-Box {
		        padding-left: 1rem;
		        margin-left: 0rem;
		    }

		    #${this.main_warpper_id} h5 {
		        font-size: 1rem;
		    }
		    #${this.main_warpper_id} .${this.attr_prefix}searchBox {
		        width: 100%;
		    }
		}
		@media only screen and (max-width: 400px) {
		   #${this.main_warpper_id} .${this.attr_prefix}ratingList b {
		        line-height: 1.2;
		    }
		    #${this.main_warpper_id} .${this.attr_prefix}ratingList li div {
		        width: 8rem;
		    }
		}
		</style>
	`


	static init(targetDomElementId){
		const head = document.querySelector("head")
		const body = document.querySelector("body")
		head.insertAdjacentHTML("beforeend", this.styles)
		

		const html = `
			<div id='${this.main_warpper_id}'>
				<div class="${this.attr_prefix}reviewSection">
			        <div class="${this.attr_prefix}reviewSection__heading">
			            <h2>Reviews</h2>
			        </div>
			        ${this.getReviewTopPartHTML()}

			            <div class="${this.attr_prefix}reviewSection__Body--box2">
			                <div class="${this.attr_prefix}tab">
			                    <div class="${this.attr_prefix}tab__head">
			                        <ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}gap-2">
			                            <li class="${this.attr_prefix}btn ${this.attr_prefix}active" data-class="${this.attr_prefix}Reviews" onclick="Affiliateambassadorteam_RQ_Feature.showReviewPart(this)">
			                                Reviews
			                            </li>
			                            <li class="${this.attr_prefix}btn" data-class="${this.attr_prefix}Questions" onclick="Affiliateambassadorteam_RQ_Feature.showQuestionPart(this)">
			                                Questions
			                            </li>
			                        </ul>
			                    </div>
			                    <div class="${this.attr_prefix}tab__body">

									<div class='${this.attr_prefix}main--contents-render-placement'>
										${this.getReviewPart()}
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

	//review module top part
	static getReviewTopPartHTML(){
		return `<div class="${this.attr_prefix}reviewSection__Body">
		<div class="${this.attr_prefix}reviewSection__Body--box ${this.attr_prefix}flex_ ${this.attr_prefix}flex_space">
			<div class="${this.attr_prefix}left">
				<div class="${this.attr_prefix}flex_ ${this.attr_prefix}gap-4 ${this.attr_prefix}align_center">
					<div>
						<h2>5.0</h2>
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}flex_center ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
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
						<ul class="${this.attr_prefix}list ${this.attr_prefix}ratingList">
							<li class="${this.attr_prefix}w-80">
								<b>5</b>
								<div><span></span></div>
							</li>
							<li class="${this.attr_prefix}w-60">
								<b>4</b>
								<div><span></span></div>
							</li>
							<li class="${this.attr_prefix}w-40">
								<b>3</b>
								<div><span></span></div>
							</li>
							<li class="${this.attr_prefix}w-20">
								<b>2</b>
								<div><span></span></div>
							</li>
							<li class="${this.attr_prefix}w-0">
								<b>1</b>
								<div><span></span></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="${this.attr_prefix}right">
				<a href="#" class="${this.attr_prefix}btn ${this.attr_prefix}flex_ ${this.attr_prefix}gap-1 ${this.attr_prefix}align_center">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: #fff"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>
					<span>Ask A Question</span>
				</a>
			</div>
		</div>`
	}

	//review parts
	//======================================
	static getReviewPart(){
		return `
		<div class="${this.attr_prefix}tabBodyBox" id="${this.attr_prefix}Reviews">
		${this.getReviewFilterOptions()}

		<div class="${this.attr_prefix}tabBodyBox__inner">
			<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center">
				<h4 class="${this.attr_prefix}m-0 ${this.attr_prefix}revicount">
					535 Reviews
				</h4>
				<div class="${this.attr_prefix}dropdown">
					<button class="${this.attr_prefix}btn ${this.attr_prefix}btn-secondary ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_space ${this.attr_prefix}gap-1" onclick="Affiliateambassadorteam_RQ_Feature.filterOptionDropdownToggle(this)">
						<span> Sort By</span>
						<i class="fa-solid fa-chevron-down"></i>
					</button>
					<div class="${this.attr_prefix}dropdown-menu ${this.attr_prefix}d-none">
						<a class="${this.attr_prefix}dropdown-item" href="#">Newest</a>
						<a class="${this.attr_prefix}dropdown-item" href="#">Highest Rating</a>
						<a class="${this.attr_prefix}dropdown-item" href="#">Lowest Rating</a>
						<a class="${this.attr_prefix}dropdown-item" href="#">Most Votes</a>
						<a class="${this.attr_prefix}dropdown-item" href="#">Least Votes</a>
					</div>
				</div>
			</div>
			
			<div class="${this.attr_prefix}tabBodyBox__inner-Box">
				<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
					<div class="${this.attr_prefix}profileBox__img">J</div>
					<div class="${this.attr_prefix}profileBox__Body">
						<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
							<h5 class="${this.attr_prefix}m-0">
								Jason
								<span>Verified Buyer</span>
							</h5>
							<b>03/04/22</b>
						</div>

						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
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
				<ul class="${this.attr_prefix}list ${this.attr_prefix}imgBox ${this.attr_prefix}grid ${this.attr_prefix}grid_4 ${this.attr_prefix}gap-4 ${this.attr_prefix}my-2">
					<li>
						<a href="#inline1" class="${this.attr_prefix}conn_img">
							<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
								alt="" />
						</a>
						<div class="${this.attr_prefix}d-none" id="${this.attr_prefix}inline1">
							<div class="${this.attr_prefix}modalBox flex_">
								<div class="${this.attr_prefix}left">
									<div class="${this.attr_prefix}swiper ${this.attr_prefix}mySwiper">
										<div class="${this.attr_prefix}swiper-wrapper">
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
										</div>
										<div class="${this.attr_prefix}swiper-pagination"></div>
									</div>
								</div>
								<div class="${this.attr_prefix}right">
									<div class="${this.attr_prefix}tabBodyBox__inner-Box">
										<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
											<div class="${this.attr_prefix}profileBox__img">
												J
											</div>
											<div class="${this.attr_prefix}profileBox__Body">
												<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
													<h5 class="${this.attr_prefix}m-0">
														Jason
														<span>Verified Buyer</span>
													</h5>
													<b>03/04/22</b>
												</div>

												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li>
														<i class="fa-solid fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
										<!-- close profileBox  -->

										<h4 class="${this.attr_prefix}m-0">Top Notch Coatin</h4>
										<p>
											This stuff is the shit!!
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

										<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}likeclick ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<a href="#" class="${this.attr_prefix}sharebtn">
													<i class="fa-regular fa-share-from-square"></i>
													<span>Share</span>
												</a>
												<div class="${this.attr_prefix}sharebtndisplay ${this.attr_prefix}d-none">
													<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ gap-1">
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
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<p class="${this.attr_prefix}m-0">
													Was
													This
													Review
													Helpful?
												</p>
												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}gap-1">
													<li>
														<a href="#" class="${this.attr_prefix}countup">
															<i class="fa-solid fa-thumbs-up"></i>
															<span>0</span>
														</a>
													</li>
													<li>
														<a href="#" class="${this.attr_prefix}countdown">
															<i class="fa-solid fa-thumbs-down"></i>
															<span>0</span>
														</a>
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
						<a href="#inline2" class="${this.attr_prefix}conn_img">
							<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
								alt="" />
						</a>
						<div class="${this.attr_prefix}d-none" id="${this.attr_prefix}inline2">
							<div class="${this.attr_prefix}modalBox ${this.attr_prefix}flex_">
								<div class="${this.attr_prefix}left">
									<div class="${this.attr_prefix}swiper ${this.attr_prefix}mySwiper">
										<div class="${this.attr_prefix}swiper-wrapper">
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
										</div>
										<div class="${this.attr_prefix}swiper-pagination"></div>
									</div>
								</div>
								<div class="${this.attr_prefix}right">
									<div class="${this.attr_prefix}tabBodyBox__inner-Box">
										<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
											<div class="${this.attr_prefix}profileBox__img">
												J
											</div>
											<div class="${this.attr_prefix}profileBox__Body">
												<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
													<h5 class="${this.attr_prefix}m-0">
														Jason
														<span>Verified Buyer</span>
													</h5>
													<b>03/04/22</b>
												</div>

												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li>
														<i class="fa-solid fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
										<!-- close profileBox  -->

										<h4 class="m-0"> Top Notch Coatin</h4>
										<p>
											This stuff is the shit!!
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

										<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}likeclick ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<a href="#" class="${this.attr_prefix}sharebtn">
													<i class="fa-regular fa-share-from-square"></i>
													<span>Share</span>
												</a>
												<div class="${this.attr_prefix}sharebtndisplay ${this.attr_prefix}d-none">
													<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}gap-1">
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
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<p class="${this.attr_prefix}m-0">
													Was
													This
													Review
													Helpful?
												</p>
												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}gap-1">
													<li>
														<a href="#" class="${this.attr_prefix}countup">
															<i class="fa-solid fa-thumbs-up"></i>
															<span>0</span></a>
													</li>
													<li>
														<a href="#" class="${this.attr_prefix}countdown">
															<i class="fa-solid fa-thumbs-down"></i>
															<span>0</span>
														</a>
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
						<a href="#inline3" class="${this.attr_prefix}conn_img">
							<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
								alt="" />
						</a>
						<div class="${this.attr_prefix}d-none" id="${this.attr_prefix}inline3">
							<div class="${this.attr_prefix}modalBox ${this.attr_prefix}flex_">
								<div class="${this.attr_prefix}left">
									<div class="${this.attr_prefix}swiper ${this.attr_prefix}mySwiper">
										<div class="${this.attr_prefix}swiper-wrapper">
											<div class="swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
										</div>
										<div class="${this.attr_prefix}swiper-pagination"></div>
									</div>
								</div>
								<div class="${this.attr_prefix}right">
									<div class="${this.attr_prefix}tabBodyBox__inner-Box">
										<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
											<div class="${this.attr_prefix}profileBox__img">
												J
											</div>
											<div class="${this.attr_prefix}profileBox__Body">
												<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
													<h5 class="${this.attr_prefix}m-0">
														Jason
														<span>Verified Buyer</span>
													</h5>
													<b>03/04/22</b>
												</div>

												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
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

										<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}likeclick ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<a href="#" class="${this.attr_prefix}sharebtn">
													<i class="fa-regular fa-share-from-square"></i>
													<span>Share</span>
												</a>
												<div class="${this.attr_prefix}sharebtndisplay ${this.attr_prefix}d-none">
													<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}gap-1">
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
											<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
												<p class="${this.attr_prefix}m-0">
													Was
													This
													Review
													Helpful?
												</p>
												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}gap-1">
													<li>
														<a href="#" class="${this.attr_prefix}countup">
															<i class="fa-solid fa-thumbs-up"></i>
															<span>0</span>
														</a>
													</li>
													<li>
														<a href="#" class="${this.attr_prefix}countdown">
															<i class="fa-solid fa-thumbs-down"></i>
															<span>0</span>
														</a>
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
						<a href="#inline4" class="${this.attr_prefix}conn_img">
							<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983450/square.jpg?1659888633"
								alt="" />
						</a>
						<div class="${this.attr_prefix}d-none" id="${this.attr_prefix}inline4">
							<div class="${this.attr_prefix}modalBox ${this.attr_prefix}flex_">
								<div class="${this.attr_prefix}left">
									<div class="${this.attr_prefix}swiper ${this.attr_prefix}mySwiper">
										<div class="${this.attr_prefix}swiper-wrapper">
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
											<div class="${this.attr_prefix}swiper-slide">
												<img src="https://cdn-yotpo-images-production.yotpo.com/Review/390916793/332983426/original.jpg?1659888625"
													alt="" />
											</div>
										</div>
										<div class="${this.attr_prefix}swiper-pagination"></div>
									</div>
								</div>
								<div class="${this.attr_prefix}right">
									<div class="${this.attr_prefix}tabBodyBox__inner-Box">
										<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
											<div class="${this.attr_prefix}profileBox__img">
												J
											</div>
											<div class="${this.attr_prefix}profileBox__Body">
												<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
													<h5 class="${this.attr_prefix}m-0">
														Jason
														<span>Verified Buyer</span>
													</h5>
													<b>03/04/22</b>
												</div>

												<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li class="${this.attr_prefix}active">
														<i class="fa-solid fa-star"></i>
													</li>
													<li>
														<i class="fa-solid fa-star"></i>
													</li>
												</ul>
											</div>
										</div>
										<!-- close profileBox  -->
										
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}likeclick ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
					<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
						<a href="#" class="${this.attr_prefix}sharebtn">
							<i class="fa-regular fa-share-from-square"></i>
							<span>Share</span>
						</a>
						<div class="${this.attr_prefix}sharebtndisplay ${this.attr_prefix}d-none">
							<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}gap-1">
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
					<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
						<p class="${this.attr_prefix}m-0">
							Was This Review Helpful?
						</p>
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}gap-1">
							<li>
								<a href="#" class="${this.attr_prefix}countup">
									<i class="fa-solid fa-thumbs-up"></i>
									<span>0</span>
								</a>
							</li>
							<li>
								<a href="#" class="${this.attr_prefix}countdown">
									<i class="fa-solid fa-thumbs-down"></i>
									<span>0</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			<ul id="${this.attr_prefix}border-pagination">
				<li><a class="" href="#">«</a></li>
				<li><a href="#">1</a></li>
				<li>
					<a href="#" class="${this.attr_prefix}active">2</a>
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
		`
	}

	//filter options of review
	static getReviewFilterOptions(){
		return `<h6 class="${this.attr_prefix}filter">Filter Reviews</h6>
		<div class="${this.attr_prefix}searchBox">
			<i class="fa-solid fa-magnifying-glass"></i>
			<input type="search" placeholder="Search Reviews" class="${this.attr_prefix}searchBox-input"
				maxlength="120" />
		</div>
		<br />
		<div class="${this.attr_prefix}flex_ ${this.attr_prefix}rati">
			<div class="${this.attr_prefix}dropdown ${this.attr_prefix}rating">
				<button class="${this.attr_prefix}btn ${this.attr_prefix}btn-secondary ${this.attr_prefix}flex_ align_center ${this.attr_prefix}flex_space ${this.attr_prefix}gap-1" onclick="Affiliateambassadorteam_RQ_Feature.filterOptionDropdownToggle(this)">
					<span>Rating</span>
					<i class="fa-solid fa-chevron-down"></i>
				</button>
				<div class="${this.attr_prefix}dropdown-menu ${this.attr_prefix}d-none">
					<a class="${this.attr_prefix}dropdown-item" href="#">All</a>
					<a class="${this.attr_prefix}dropdown-item" href="#">
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li>
								<i class="fa-solid fa-star"></i>
							</li>
						</ul>
					</a>
					<a class="${this.attr_prefix}dropdown-item" href="#">
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li>
								<i class="fa-solid fa-star"></i>
							</li>
						</ul>
					</a>
					<a class="${this.attr_prefix}dropdown-item" href="#">
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
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
					<a class="${this.attr_prefix}dropdown-item" href="#">
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
								<i class="fa-solid fa-star"></i>
							</li>
							<li class="${this.attr_prefix}active">
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
					<a class="${this.attr_prefix}dropdown-item" href="#">
						<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}startlist ${this.attr_prefix}gap-1">
							<li class="${this.attr_prefix}active">
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
			<div class="${this.attr_prefix}dropdown ${this.attr_prefix}imagevideo">
				<button class="${this.attr_prefix}btn ${this.attr_prefix}btn-secondary ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_space ${this.attr_prefix}gap-1" onclick="Affiliateambassadorteam_RQ_Feature.filterOptionDropdownToggle(this)">
					<span>Images & Videos</span>
					<i class="fa-solid fa-chevron-down"></i>
				</button>
				<div class="${this.attr_prefix}dropdown-menu ${this.attr_prefix}d-none">
					<a class="${this.attr_prefix}dropdown-item" href="#"><b>All</b></a>
					<a class="${this.attr_prefix}dropdown-item" href="#">With Images & Videos</a>
				</div>
			</div>
		</div>`
	}
	static filterOptionDropdownToggle(el){
		const sibling = el.nextElementSibling
		sibling.classList.toggle(`${this.attr_prefix}d-none`)
	}

	//question part
	//==================================
	static getQuestionPart(){
		return `
		<div class="${this.attr_prefix}tabBodyBox" id="${this.attr_prefix}Questions">
		<div class="${this.attr_prefix}questionBox">
			<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
				<div class="${this.attr_prefix}profileBox__img">J</div>
				<div class="${this.attr_prefix}profileBox__Body">
					<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
						<h5 class="${this.attr_prefix}m-0">
							Tom
							<span>Verified Buyer</span>
						</h5>
						<b>03/04/22</b>
					</div>
					<b>
					<span>Q: </span> Does this work on glass also?</b>
				</div>
			</div>
			<!-- close profileBox  -->

			<div class="${this.attr_prefix}questionBox__answer">
				<div class="${this.attr_prefix}questionBox__answerhe">
					<i class="fa-solid fa-message"></i>
					Answer (<span>0</span>)
				</div>
				<div class="${this.attr_prefix}questionBox__answer-Box">
					<div class="${this.attr_prefix}profileBox ${this.attr_prefix}flex_ ${this.attr_prefix}align_center">
						<div class="${this.attr_prefix}profileBox__img">
							J
						</div>
						<div class="${this.attr_prefix}profileBox__Body">
							<div class="${this.attr_prefix}flex_ ${this.attr_prefix}flex_space ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap">
								<h5 class="${this.attr_prefix}m-0">
									Jason
									<span>Verified Buyer</span>
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
					<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}likeclick ${this.attr_prefix}flex_end ${this.attr_prefix}align_center">
						<li class="${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}flex_wrap ${this.attr_prefix}gap-2">
							<p class="${this.attr_prefix}m-0">
								Was This Review Helpful?
							</p>
							<ul class="${this.attr_prefix}list ${this.attr_prefix}flex_ ${this.attr_prefix}align_center ${this.attr_prefix}gap-1">
								<li>
									<a href="#" class="${this.attr_prefix}countup">
										<i class="fa-solid fa-thumbs-up"></i>
										<span>0</span>
									</a>
								</li>
								<li>
									<a href="#" class="${this.attr_prefix}countdown">
										<i class="fa-solid fa-thumbs-down"></i>
										<span>0</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		</div>
		`
	}

	//control methods
	static showReviewPart(el){
		document.querySelector(`#${this.main_warpper_id} .${this.attr_prefix}main--contents-render-placement`).innerHTML = this.getReviewPart()
		el.classList.add(`${this.attr_prefix}active`)
		//console.log(el.nextElementSibling)
		const questionBtn = el.nextElementSibling
		questionBtn.classList.remove(`${this.attr_prefix}active`)
	}
	static showQuestionPart(el){
		document.querySelector(`#${this.main_warpper_id} .${this.attr_prefix}main--contents-render-placement`).innerHTML = this.getQuestionPart()
		el.classList.add(`${this.attr_prefix}active`)
		//console.log(el.previousElementSibling)
		const reviewBtn = el.previousElementSibling
		reviewBtn.classList.remove(`${this.attr_prefix}active`)

	}

	static postReview(){

	}

	static askAQuestion(){
		
	}
}

