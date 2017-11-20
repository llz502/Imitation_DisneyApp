<template>
    <div class="sg_character_wrap">
        <h2 class="title">characters</h2>
        <ul class="character_list">
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character1.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Mitch and his friends</b>
                </a>
            </router-link>
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character2.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Snow White</b>
                </a>
            </router-link>
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character3.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Die-cast cars</b>
                </a>
            </router-link>
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character4.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Little princess Su Feiya</b>
                </a>
            </router-link>
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character5.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Soundtrack</b>
                </a>
            </router-link>
            <router-link to="/Characters" tag="li" active-class="active">
                <a href="javascript:;">
                    <img src="../../assets/images/character6.jpg" alt="图片">
                </a>
                <a href="javascript:;">
                    <b>Mitch and his friends</b>
                </a>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
.sg_character_wrap {
    text-align: center;
    margin: 20px auto 0;
    width: 100%;
}
.sg_character_wrap>.title {
    color: rgba(0,0,0,0.9);
    font-size: 24.8px;
    font-weight: bold;
    text-align: center;
    letter-spacing:-0.248px;
}
.character_list {
    margin: 0 auto;
    height: 198px;
    display: inline-block;
    position: relative;
    zoom: 1;
    overflow: hidden;
    padding-top: 20px;
}
.character_list::after {
    content: "";
    display: block;
    clear: both;
}
.character_list li {
    float: left;
    width: 168px;
    text-align: center;
    margin: 0 16px;
    position: relative;
    text-align: center;
}
.character_list li a{
    display: block;
    color: #333;
    text-decoration: none;
    vertical-align: baseline;
    cursor: pointer;
    width: 114px;
    height: 114px;
    margin: 0 auto;
}
.character_list li a:nth-of-type(1) {
    background: #DDD;
    border-radius: 57px;
}
.character_list li img {
    height: 114px;
    width: 114px;
    display: inline-block;
    border-radius: 10em;
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    line-height: 114px;
}
.character_list li img:hover {
    cursor: pointer;
    position: relative;
    text-align: center;
    top: -2px;
    transform: translate(0px, -2px) scale(1.2);
    transition: .2s all ease;
}
.character_list li b{
    font-size: 18px;
    display: inline-block;
    font-weight: bold;
    margin-top: 20px;
}
@media screen and (max-width:1024px){
    .sg_character_wrap {
        width: 80%;
    }
    .character_list li {
        width: 33%;
        margin: 0;
    }

}
@media screen and (max-width:768px){
    .character_list {
        height: 178px;
    }
}
@media screen and (max-width:414px){
    .sg_character_wrap {
        width: 100%;
    }
    .sg_character_wrap>.title {
        font-size: 17px;
        line-height: 23px;
        padding-bottom: 0px;
    }
    .character_list {
        height: 215px;
        width: 100%;
        padding-top: 5px;
    }
    .character_list li {
        width: 50%;
        margin: 10px 0;
    }
    .character_list li a{
        width: 57px;
        height: 14px;
        margin: 0 auto;
    }
    .character_list li a:nth-of-type(1) {
        width: 57px;
        height: 57px;
        border-radius: 29px;
    }
    .character_list li img {
        width: 57px;
        height: 57px;
    }
    .character_list li b {
        font-size: 14px;
        display: block;
        font-weight: bold;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>