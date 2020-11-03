import styled from 'styled-components';

const Container=styled.div`
    /* display:flex;
    flex-direction:columns; */
    background:white;
    header{
        width:100%;
        height: 50px;
        background:#D5543F;
        text-align:center;
        line-height:50px;
        color:white;
        font-size:16px;
        position:fixed;
        top:0;
        left:0;
        z-index:1;
    }
`

const SwiperStyle=styled.div`
    border-radius:16px;
    overflow:hidden;
    width:90%;
    height: 200px;
    margin:10px auto;
    margin-top:60px;
    img{
        width:100%;
        height:200px;
        border-radius:16px;
    }
`
const DivLine=styled.div`
    width:100%;
    height:15px;
    background:#eee;
    margin-top:10px;
`
const DivMenu=styled.div`
    margin-top:15px;
    width:100%;
    background:white;
    .am-flexbox-item{
        height: 110px;
        border-radius:10px;
        overflow:hidden;
    }
    /deep/ .am-grid-item-active{
        background-color:white ;
    }
    .title{
        margin-left:15px;
        font-size:14px;
    }
    .box{
        position:relative;
        height: 110px;
        border-radius:10px;
        overflow:hidden;
        .oneBox{
            width:100%;
            height:100%;
            img{
                width:90%;
                height:90%;
                border-radius:10px;
            }
        }
        .itemBox{
            width:100%;
            height:100%;
            background:linear-gradient(to right,rgba(0,0,0,0.8) 10%,rgba(0,0,0,0) 100%);
            position:absolute;
            top:0;
            left:0;
            p{
                text-align:left;
                margin-left:15px;
                font-weight:600;
            }
            p:first-child{
                font-size:14px;
            }
            p:last-child{
                font-size:12px;
            }
        }
    }
`

const DivItem =styled.div`
    p{
        color:${props=>props.color}
    }
`

const DivRecommed=styled.div`
    width:100%;
    nav{
        display:flex;
        margin-top:30px;
        font-size:16px;
        box-sizing:border-box;
        padding:0 15px;
        li{
            list-style:none;
            width: 80px;
            height: 30px;
            text-align:center;
            line-height:30px;
            color:#AAA;
        }
        .active{
            color:black;
            font-size:18px;
            font-weight:550;
        }
    }
    section{
        box-sizing:border-box;
        padding:0 10px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        margin-top:15px;
        >div{
            width:45%;
            img{
                width:100%;
                height: 100px;
            }
            p{
                font-size:14px;
                color:black;
                font-weight:550;
            }
        }
    }
`

export {
    Container,
    SwiperStyle,
    DivLine,
    DivMenu,
    DivRecommed,
    DivItem
}