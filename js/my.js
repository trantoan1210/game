mensaje =
'<font size="6" face="Courier New" >Xin Chào Dân Làng Ở Xứ Sở BLABLA<br></font>' + ' <br>' +

'<font  size="4">Khi các bạn nhận được lá thư này cũng là lúc....</font><br>' +
'<font size="4" >Trái Đất chúng ta đang mắc 1 đại dịch rất lớn, và khó khăn bởi 1 con virus...</font><br>' +
'<font size="4" >Trong cơ sở chúng tôi có 1 thiết bị có khả năng phát hiện ra tình trạng của mọi người, nhưng chỉ thể hiện số liệu....</font><br>           ' +
'  <font size="4" >Vì thế, chúng tôi có thể phát hiện được trong làng các bạn có 1 người mắc bệnh, nên chúng tôi mong mọi người tìm ra người được người ấy giúp chúng tôi</font>' +'<br>' +
'  <font size="4" >Chúng tôi sẽ cập nhật tình trạng mắc bệnh của làng vào buổi chiều</font>' +'<br>' +
'  <font size="4">Và do làng quá xa chúng tôi nên chúng tôi chỉ có thể sử dụng thiết bị để xét nghiệm 1 người/2 ngày-trong buổi công bố tình trạng.Nên hãy quyết định thật kỹ để chọn 1 người nhé!</font>' +'<br>' +
'<font size="5" >Chú ý:</font>'+'<br>' +
'<font size="5" >Người mắc bệnh sẽ không có triệu chứng gì, cho đến ngày thứ 4 mắc bệnh người đó sẽ chết</font>'+'<br>' +
'<font size="5" >Khi người mắc bệnh chết, những người đã từng tiếp xúc trực tiếp với người mắc bệnh, sẽ trở thành nạn nhân tiếp theo của con virus ấy....</font>'+'<br>' +
'<font size="5" >Mọi người hãy cân nhắc khi đi đâu đó</font>'+'<br>' +
'<p> <font face="Courier New" size="6">Chúc Làng Các Bạn May Mắn nhé !!!^^ </font></p>'+'<table>'+'<br>'+
'<font size="5">Bảng chi tiết trò chơi</font>'+'<br>'+
'<table border="1"><tr><td>Vai trò:</td><td>Quản trò</td><td>Người chơi</td><td>Người kháng thể</td><td>Người đeo khẩu trang</td><td>F0</td><td>F1</td><td>F2</td><td>...Đang cập nhật...</td></tr><tr><td>Chú thích:</td><td>Điều khiển trò chơi, chọn người đặc biệt</td><td>Có nhiệm vụ tìm ra người F0</td><td>Có thể giúp những người F1 trở lên thành người bình thường, nhưng mắc bệnh khi tiếp xúc với F0</td><td>Chỉ bị lây khi tiếp xúc với F0 2 lần</td><td>Người Mắc Bệnh</td><td>Người trực tiếp tiếp xúc F0</td><td>Người trực tiếp tiếp xúc F1</td><td>...Đang cập nhật...</td></tr></table>';
        line = 0;
        cursor = '_';
        function teclear() {
            if (line == mensaje.length) cursor = '';
            document.getElementById('Email').innerHTML = mensaje.substring(0, line) + cursor;
            var objDiv = document.getElementById("Email");
            objDiv.scrollTop = objDiv.scrollHeight;
            if (line++ < mensaje.length) setTimeout("teclear()", 60);
        }