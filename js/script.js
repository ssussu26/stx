$(document).ready(function () {

    // 모달 기능
    let modal =$('.modal');
    let modalCon = $('.modal-content');
    let modalClose = $('.modal-close');
    modal.click(function(){
        modal.stop().fadeOut();
        $('html').css('overflow', 'auto');
    });
    modalCon.click(function(event){
        // 아래로 클릭한 정보 전달 막기
        event.stopPropagation();
    });    
    modalClose.click(function(){
        modal.stop().fadeOut();
        $('html').css('overflow', 'auto');
    });

    // 게시판에 글 목록 출력
    // 공지사항 관련 데이터
    var noticeData = [{
            link: "#",
            title: "에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)"
        },
        {
            link: "#",
            title: "에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)"
        },
        {
            link: "#",
            title: "2021년도 협력업체 모집공고"
        },
        {
            link: "#",
            title: "STX건설 상호 사용 관련 안내"
        }
    ];
    // 공지사항 출력 장소
    var noticeList = $(".notice-list");
    // 공지사항에 출력할 내용
    // var noticeCont = "";
    // for(var i = 0; i < noticeData.length; i++) {
    //     noticeCont += `<li><a href="${noticeData[i].link}"><span class="notice-list-txt">${noticeData[i].title}</span></a></li>`;
    // }
    // noticeList.html(noticeCont);

    // 뉴스 관련 데이터
    var newsData = [{
            link: "#",
            title: "STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’"
        },
        {
            link: "#",
            title: "STX건설, 2018년 성장 '청신호'"
        }
    ];
    // 뉴스관련 저장 장소
    var newsList = $(".news-list");
    // 뉴스에 출력할 내용
    // var newsCont = "";
    // for(var i = 0; i < newsData.length; i++) {
    //     newsCont += `<li><a href="${newsData[i].link}"><span class="notice-list-txt">${newsData[i].title}</span></a></li>`;
    // }
    // newsList.html(newsCont);

    function listMake(data, tag) {
        // 임시로 내용을 출력 내용을 저장
        var temp = "";
        for (var i = 0; i < data.length; i++) {
            temp += `<li><a href="${data[i].link}"><span class="notice-list-txt">${data[i].title}</span></a></li>`;
        }
        tag.html(temp);
    }

    listMake(noticeData, noticeList);
    listMake(newsData, newsList);

});
window.onload = function(){
    // 준비가 되면 실행 코드 작성

}