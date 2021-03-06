$(window).on("load", function () {
    function fade() {
        let animation_height = $(window).innerHeight() * 0.5;
        let ratio = Math.round((1 / animation_height) * 10000) / 10000;
        $(".fade").each(function () {
            let objectTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({
                        transition: "opacity 1s linear",
                        transition: "left 1s linear",
                        opacity: 1,
                        left: "0px",
                    });
                } else {
                    $(this).css({
                        transition: "opacity 1s linear",
                        opacity: (windowBottom - objectTop) * ratio,
                        transition: "left 1s linear",
                        left: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
                    });
                }
            } else {
                $(this).css({
                    opacity: 0,
                    left: "800px",
                });
            }
        });
    }
    $(".fade").css({
        opacity: 0,
        left: "100px",
    });
    fade();

    $(window).scroll(function () {
        fade();
    });
    /**
     * 부유하는 요소 관리
     */
    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
        // `.toFixed()`를 통해 반환된 '문자 데이터'를,
        // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }

    // 부유하는(떠 다니는) 요소를 만드는 함수
    function floatingObject(selector, delay, size) {
        gsap.to(
            selector, // 선택자
            random(1.5, 2.5), // 애니메이션 동작 시간
            {
                delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
                y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
                repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
                yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
                ease: Power1.easeInOut // Easing 함수 적용.
            }
        )
    }
    floatingObject('.floating1', 0.5, 30)
    floatingObject('.floating2', 0.5, 30)
    floatingObject('.floating3', 1.5, 20)


});


