import React,{ Component } from 'react';
import './User6.css';
//import Header from './Header';
import Footer from './Footer';



class User6 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box000">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u6 button4u6"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u6 button5u6"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u6 button6u6"><b>ประกาศของฉัน</b></button>
          <button class="button3u6 button7u6"><b>ประกาศที่ดูล่าสุด</b></button>
          </table>

          <table class="tableinfor0">
          <tr>
            <td><p class="infor1"><b><font size="5" ><u>ข้อมูลส่วนตัว</u></font></b></p></td>
          </tr>
          </table>

          <table class="tableinfor">
          <tr>
            <th><label for="account"><font size="5" ><b>ชื่อบัญชี&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="acctext" id="account" name="account"></input></th>
            <th></th>
          </tr>

           <tr>
            <th><label for="fname"><font size="5" ><b>ชื่อ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="fntext" id="fname" name="fname" ></input></th>
            <th><label for="lname"><font size="5" ><b>นามสกุล&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="lntext" id="lname" name="lname" ></input></th>
          </tr>

          <tr>
            <th><label for="email"><font size="5" ><b>อีเมล &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </b></font></label>
              <input type="emtext" id="email" name="email" ></input></th>
            <th><label for="tel"><font size="5" ><b>เบอร์โทร&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="teltext" id="tel" name="tel" ></input></th>
          </tr>
          </table>
       


          <table class="tableinfor0">
          <tr>
            <td><p class="infor11"><b><font size="5" ><u>ที่อยู่</u></font></b></p></td>
          </tr>
          </table>

          <table class="tableinfor">
          <tr>
            <th><label for="houseno"><font size="5" ><b>บ้านเลขที่ &nbsp;</b></font></label>
              <input type="hntext" id="houseno" name="houseno"></input></th>
            <th><label for="village"><font size="5" ><b>หมู่บ้าน&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="viltext" id="village" name="village"></input></th>
              <th><label for="soi"><font size="5" ><b>ซอย&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="soitext" id="soi" name="soi"></input></th>
          </tr>

           <tr>
            <th><label for="road"><font size="5" ><b>ถนน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="rdtext" id="road" name="road" ></input></th>
            <th><label for="district"><font size="5" ><b>เขต/ตำบล&nbsp;</b></font></label>
              <input type="dttext" id="district" name="district" ></input></th>
              <th><label for="subdistrict"><font size="5" ><b>แขวง/อำเภอ&nbsp;&nbsp;</b></font></label>
              <input type="sdttext" id="subdistrict" name="subdistrict" ></input></th>
          </tr>

          <tr>
            <th><label for="province"><font size="5" ><b>จังหวัด&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="pvtext" id="province" name="province" ></input></th>
          </tr>
          </table>
       
          <br/><br/><br/>
      
          <button class="button3u6 button8u6"><b>บันทึก</b></button>
       


          <Footer/>
        </div>
        </div>
     </div>
    </div>
  );
  }
}

export default User6;