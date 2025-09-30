$(function() {
    // 풀페이지 기능을 초기화 해야 한다
    const end = $(window).width() > 1024; // 1024px 이상에서는 풀페이지 적용 되어야 한다
    if (end) {
      $('#jungo').fullpage({
        // sectionsColor: ['#ECECEC', '#FFE4E4', '#F3E9DD', '#D7F3E7', '#D0F7C7'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: false,
        navigationPosition: 'Top',
        navigationTooltips: ['Top', 'Profile', 'Work', 'Portfolio', 'Book'],
        keyboardScrolling: true,
        responsiveWidth: 1025,
        afterLoad: function(anchorLink, index) {
          if (index === 2 || index === 3 || index === 4) {
            const section = $('.section').eq(index - 1);
            section.find('*').addClass('visible');
            section.on('transitionend', function() {
              section.addClass('completed');
            });
          }
        }
      });
    } else {
      // 1024 이하라면 풀페이지를 비활성화하고 일반 스크롤 방식으로 설정하기
      $.fn.fullpage.destroy('all');
      $('body').removeClass('fp-enabled'); // 풀페이지 스타일 제거하기
    }
    
  });


 // 호버시 이미지 애니메이션 호버시 이미지가 커지고 벗어나면 줄어든다
 $('.image-box img').on('mouseenter', function() {
    $(this).css({
        'transition': 'all 0.5s ease',
        'width': '90%',
        'transform': 'scale(1.05)'
    });
});


$(function() {
  // 이미지 클릭 시 팝업 열기
  $('.image-box').on('click', function() {
    if($(window).width() > 1024) {
      var imageurl = $(this).data('image'); // 클릭된 이미지의 url 가져오기
      $('#image-popup img').attr('src', imageurl); 
      $('#image-popup').fadeIn(); // 팝업 열기
    }
  });

  $('#image-popup .close-btn').on('click', function() {
    $('#image-popup').hide();
  });

  // 배경 클릭 시 팝업 닫기
  $('#image-popup').on('click', function(e) {
    if (e.target === this) {
      $('#image-popup').hide();
    }
  });
});


$('.image-box img').on('mouseleave', function() {
    $(this).css({
        'transition': 'all 0.5s ease',
        'width': '80%',
        'transform': 'scale(1)'
    });
})

$('.book').on('click', function() {
    // 책을 클릭하면 특정 섹션으로 이동해야 함
    var sectionId = $(this).data('section');
     // 클릭한 책의 data-section 값을 가져오기
      $.fn.fullpage.moveTo(sectionId); 
      // 해당 섹션으로 스크롤 이동하기
    });

