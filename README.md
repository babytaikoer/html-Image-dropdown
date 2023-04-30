Html Image Dropdown
===================

select태그를 이미지를 사용할 수 있는 드롭다운 메뉴로 변경합니다.

0\. cdn
-------
```
<script src="https://cdn.jsdelivr.net/gh/babytaikoer/html-Image-dropdown/imgDropdownSelect.js"></script>
```

1\. 변환할 select 태그 작성
--------------------
```
<select data-default="" data-default-value="" data-default-img="">
  <option value="" data-img=""></option>
</select>
```

```
data-default: 아무것도 선택하지 않았을 때 표시할 값
```
```
data-default-value: 아무것도 선택하지 않았을 때 가지는 value
```
```
data-default-img: 아무것도 선택하지 않았을 때 표시할 이미지
```
```
data-img: 드롭다운 메뉴에서 표시할 이미지
```

2\. 스타일 객체 작성
-------------
```
{
  fontSize: "",
  selectBackgroundColor: "",
  optionBackgroundColor: "",
  optionBackgroundColorOver: "",
  selectFontColor: "",
  optionFontColor: ""
}
```

```
fontSize: 폰트 사이즈
  기본값: select의 높이 - 10px
  ex) fontSize: "15px"
```
```
selectBackgroundColor: select 박스의 배경색
  기본값: white
  ex) selectBackgroundColor: "black" || selectBackgroundColor: "#000000" || selectBackgroundColor: "rgb(0,0,0)"
```
```
optionBackgroundColor: option 박스의 배경색
  기본값: white
  ex) optionBackgroundColor: "black" || optionBackgroundColor: "#000000" || optionBackgroundColor: "rgb(0,0,0)"
```
```
optionBackgroundColorOver: option 박스에 마우스를 올렸을 때 배경색
  기본값: lightblue
  ex) optionBackgroundColorOver: "pink" || optionBackgroundColorOver: "#ffc0cb" || optionBackgroundColorOver: "rgb(255,192,203)"
```
```
selectFontColor: select 박스의 글씨색
  기본값: black
  ex) selectFontColor: blue
```
```
optionFontColor: option 박스의 글씨색
  기본값: black
  ex) optionFontColor: red
```

3\. 적용
------
```
imgSelect(HTMLElement, styleObject)
```
styleObject는 입력하지 않으면 모두 기본값으로 적용됩니다.
변경된 드롭다운 메뉴의 select박스는 data-select의 class를 가집니다.

4\. value 가져오기
--------------
```
ex)document.querySelector('data-select').value
```
