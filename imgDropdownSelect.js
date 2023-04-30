function imgSelect(e, styleObject) {
    //기본값 세팅
    var styleObject = styleObject;
    if (styleObject == undefined) {
        styleObject = {};
        styleObject.fontSize = e.offsetHeight - 10 + "px";
        styleObject.selectBackgroundColor = "white";
        styleObject.optionBackgroundColor = "white";
        styleObject.optionBackgroundColorOver = "lightblue";
        styleObject.selectFontColor = "black";
        styleObject.optionFontColor = "black";
    }
    else {
        if (styleObject.fontSize == undefined) {
            styleObject.fontSize = e.offsetHeight - 10 + "px";
        }
        if(styleObject.selectBackgroundColor == undefined){
            styleObject.selectBackgroundColor = "white";
        }
        if(styleObject.optionBackgroundColor == undefined){
            styleObject.optionBackgroundColor = "white";
        }
        if(styleObject.optionBackgroundColorOver == undefined){
            styleObject.optionBackgroundColorOver = "lightblue";
        }
        if(styleObject.selectFontColor == undefined){
            styleObject.selectFontColor = "black";
        }
        if(styleObject.optionFontColor == undefined){
            styleObject.optionFontColor = "black";
        }
    }

    //중앙 정렬기
    var verticalAligner = document.createElement('div');
    verticalAligner.style.display = 'inline-block';
    verticalAligner.style.width = '0';
    verticalAligner.style.height = '100%';
    verticalAligner.style.verticalAlign = 'middle';

    //옵션들 배열
    var options = e.querySelectorAll('option');

    //기본 select 설정
    var selectBox = document.createElement('div');
    //선택 안했을 때 표시할 값
    var title = document.createElement('span');
    title.style.verticalAlign = 'middle';
    title.innerText = e.getAttribute('data-default');
    //선택 안했을 때 이미지
    var defaultImg = document.createElement('img');
    defaultImg.style.display = 'none';
    if (e.getAttribute('data-default-img') !== null) {
        var defaultImg = document.createElement('img');
        defaultImg.style.verticalAlign = 'middle';
        defaultImg.setAttribute('src', e.getAttribute('data-default-img'));
        defaultImg.style.width = 'auto';
        defaultImg.style.height = '100%';
        defaultImg.style.display = 'inline-block';
    }
    //select class 설정
    selectBox.classList = e.classList;
    selectBox.classList.add('data-select');
    //select id 설정
    selectBox.setAttribute('id', e.getAttribute('id'));
    //select value 설정
    selectBox.value = e.getAttribute('data-default-value');
    selectBox.setAttribute('value', e.getAttribute('data-value'));
    //기존 select의 style 가져오기
    selectBox.style = e.style; //혹시 몰라서
    selectBox.style.width = e.offsetWidth + 'px';
    selectBox.style.height = e.offsetHeight + 'px';
    //select 스타일 설정
    selectBox.style.boxShadow = '0 0 0 1px black inset'; //테두리 설정
    selectBox.style.backgroundColor = styleObject.selectBackgroundColor; //배경 색 설정
    selectBox.style.display = 'inline-block'; //inline-block으로 설정
    selectBox.style.verticalAlign = 'middle'; //글씨 정렬 설정
    selectBox.style.fontSize = styleObject.fontSize; //글씨 크기 설정
    selectBox.style.textAlign = 'center'; //중앙정렬
    selectBox.style.whiteSpace = 'nowrap'; //오버하면 ... 으로 표시
    selectBox.style.overflow = 'hidden';
    selectBox.style.textOverflow = 'ellipsis';
    selectBox.style.color = styleObject.selectFontColor; //폰트 색상 설정
    //select에 기본 값 넣기
    selectBox.innerHTML += verticalAligner.outerHTML;
    selectBox.appendChild(defaultImg);
    selectBox.appendChild(title);
    //적용하기
    e.after(selectBox);
    e.remove();


    //option 넣을 div 설정
    var select = document.createElement('div');
    //option 넣을 div style 설정
    select.style.boxShadow = "1px 0 0 0 black inset, -1px 0 0 0 black inset, 0 -1px 0 0 black inset"; //테두리 설정
    select.style.backgroundColor = styleObject.optionBackgroundColor; //배경색 설정
    select.style.width = selectBox.offsetWidth + 'px'; //가로 길이
    select.style.height = selectBox.offsetHeight * options.length + 'px'; //세로 길이
    select.style.position = 'absolute'; //앱솔루트
    select.style.left = selectBox.getBoundingClientRect().left + 'px'; //왼쪽 위치
    select.style.top = selectBox.getBoundingClientRect().top + selectBox.offsetHeight + 'px'; //위쪽 위치
    select.style.display = 'none'; //안보이게 하기
    window.addEventListener('resize', function () {
        select.style.left = selectBox.getBoundingClientRect().left + 'px';
        select.style.top = selectBox.getBoundingClientRect().top + selectBox.offsetHeight + 'px';
    }); //창 크기 조절시 위치 조정

    //select 클릭시 이벤트
    selectBox.addEventListener('click', function () {
        if (select.style.display == 'none') {
            select.style.display = 'block';
            var zIndexOfSelectBox = [];
            document.querySelectorAll('.data-select-option').forEach(function (ele) {
                zIndexOfSelectBox.push(Number(ele.style.zIndex));
            })
            if (zIndexOfSelectBox.filter(element => element == 0).length == zIndexOfSelectBox.length) {
                select.style.zIndex = '10000';
            }
            else {
                select.style.zIndex = Math.max.apply(null, zIndexOfSelectBox) + 1;
            };
        }
        else {
            select.style.display = 'none';
            select.style.zIndex = '0';
        };
    });

    //옵션 설정
    options.forEach(function (el) {
        //기본 option 설정
        var optionDiv = document.createElement('div');
        //option 스타일 설정
        optionDiv.style.width = selectBox.offsetWidth + 'px'; //가로 길이
        optionDiv.style.height = selectBox.offsetHeight + 'px'; //세로 길이
        optionDiv.style.backgroundColor = 'rgba(0,0,0,0)'; //배경색 투명
        optionDiv.style.textAlign = "center"; //중앙 정렬
        optionDiv.style.whiteSpace = "nowrap";
        optionDiv.style.overflow = "hidden";
        optionDiv.style.textOverflow = "ellipsis"; //초과시 ... 설정
        optionDiv.style.fontSize = styleObject.fontSize; //글씨 크기 설정
        optionDiv.style.color = styleObject.optionFontColor; //폰트 색상 설정
        //option value 설정
        optionDiv.value = el.getAttribute('value');
        optionDiv.setAttribute('value', el.getAttribute('value'));
        //span 값 설정
        var optionText = document.createElement('span');
        optionText.style.verticalAlign = 'middle';
        optionText.innerText = el.innerText;
        //option 이미지 설정
        var optionImg = document.createElement('img');
        optionImg.style.display = 'none';
        if (el.getAttribute('data-img') !== null) {
            var optionImg = document.createElement('img');
            optionImg.style.verticalAlign = 'middle';
            optionImg.setAttribute('src', el.getAttribute('data-img'));
            optionImg.style.width = 'auto';
            optionImg.style.height = '100%';
            optionImg.style.display = 'inline-block';
        };
        //마우스 올리면 배경색 변경
        optionDiv.addEventListener('mouseover', function () {
            this.style.backgroundColor = styleObject.optionBackgroundColorOver;
        });
        optionDiv.addEventListener('mouseleave', function () {
            this.style.backgroundColor = "rgba(0,0,0,0)";
        });
        //option에 넣기
        optionDiv.innerHTML += verticalAligner.outerHTML;
        optionDiv.innerHTML += optionImg.outerHTML;
        optionDiv.innerHTML += optionText.outerHTML;
        //클릭시 select 반영
        optionDiv.addEventListener('click', function () {
            selectBox.setAttribute('value', optionDiv.value);
            selectBox.value = optionDiv.value;
            selectBox.innerHTML = '';
            selectBox.innerHTML += verticalAligner.outerHTML;
            selectBox.innerHTML += optionImg.outerHTML;
            selectBox.innerHTML += optionText.outerHTML;
            select.style.zIndex = '0';
            select.style.display = 'none';

        });
        //option 넣기
        select.appendChild(optionDiv);
    });

    //적용하기
    document.querySelector('body').appendChild(select);
}
