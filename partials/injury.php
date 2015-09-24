<script language="javascript" src="partias/calendar.js"></script>
<div class="customers view">

    <h2>Employee Notice of Injury</h2>

   <hr>
    <form>
    <!---general info part 1 -->
    <div class="form-inline">
      <p>General Information</p>
      <div class="form-group">
        <label for="emp_name">First Name<span class="req">&nbsp;*</span></label>
        <input type="text" class="form-control" id="emp_first_name" name="emp_name" placeholder="Jane" />
      </div>
      <div class="form-group">
        <label for="emp_last_name">Last Name<span class="req">&nbsp;*</span></label>
        <input type="text" class="form-control" id="emp_last_name" name="emp_last_name" placeholder="Doe" />
      </div> 
      <div class="form-group">
        <label for="home_phone">Home Phone</label>
        <input type="phone" class="form-control" id="home_phone" placeholder="617-000-0000" />
      </div>
      <div class="form-group">
        <label for="cell_phone">Cell Phone</label>
        <input type="phone" class="form-control" id="cell_phone" placeholder="617-111-1111" />
      </div>      
    </div>
    <div class="form-inline form_space">
      <div class="form-group">
        <label for="email">Email<span class="req">&nbsp;*</span></label>
        <input type="email" class="form-control" id="email" name="email" placeholder="jdoe@newtonma.gov" />
      </div> 
      <div class="form-group">
        <label for="st_address">Home Address</label>
        <input type="address" class="form-control" id="st_address" placeholder="10 main Ave" />
      </div>
      <div class="form-group">
        <label for="state">State</label>
        <input type="state" class="form-control" id="state" placeholder="MA" />
      </div>
      <div class="form-group">
        <label for="zip">Zip</label>
        <input type="zip" class="form-control" id="zip" placeholder="02459" />
      </div>
    </div>

    <!---general infor part2-->
    <hr class="hr_dotted">
    <div class="form-inline">
      <div class="form-group">
        <label for="job_title">Job Title</label>
        <input type="text" class="form-control" id="job_title" placeholder="Technical Specialist" />
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <input type="text" class="form-control" id="department" placeholder="DPW: Engineering" />
      </div>
      <div class="form-group">
        <label for="work_location">Work Location</label>
        <input type="text" class="form-control" id="work_location" placeholder="City Hall: room 102" />
      </div>
      <div class="form-group">
        <label for="sup_name">Supervisor</label>
        <input type="text" class="form-control" id="sup_name" placeholder="Ken Smith" />
      </div>
    </div>
    <div class="form-inline form_space">
      <div class="form-group">
        <label for="dept_head">Dept. Head</label>
        <input type="text" class="form-control" id="dept_head" placeholder="Mary Ford" />
      </div>
      <div class="form-group">
        <label for="ss">SS# xxx-xx-</label>
        <input type="ss#" class="form-control" id="ss" placeholder="0000" />
      </div>
      <div class="form-group">
        <label for="dob">Birthday</label>
        <!--<input type="date" class="form-control" id="dob" placeholder="01/31/2015" />-->
        <?php
          //get class into the page
          require_once('classes/tc_calendar.php');

          //instantiate class and set properties
          $myCalendar = new tc_calendar("date1", true);
          //$myCalendar->setIcon("images/iconCalendar.gif");
          $myCalendar->setDate(1, 1, 2010);

          //output the calendar
          $myCalendar->writeScript();   
        ?>  
      </div>
    </div>
    <!---end of general info -->

    <hr class="hr_dotted">

    <!---accident section -->
     <div class="form-inline">
      <p>Description of Accident</p>
      <div class="form-group">
        <label for="body_part_injured">Body Part(s) Injured</label>
        <input type="text" class="form-control" id="body_part_injured" placeholder="upper arm" />
      </div>
      <div class="form-group">
        <label for="date_of_accident">Date of Accident</label>
        <!--<input type="datetime" class="form-control" id="date_of_accident" placeholder="01/31/2015" />-->
        <?php
          //get class into the page
          require_once('classes/tc_calendar.php');
          
          //instantiate class and set properties
          $myCalendar = new tc_calendar("date1", true);
          //$myCalendar->setIcon("images/iconCalendar.gif");
          $myCalendar->setDate(17, 7, 2015);

          //output the calendar
          $myCalendar->writeScript();   
        ?>        
      </div> 
      <div class="form-group">
        <label for="time_of_accident">Time of Accident</label>
        <?php include 'time-include.php'; ?>
      </div>
    </div>
    <div class="form_space">
      <div class="form-group">
        <label for="exact_location">Exact Location</label>
        <input type="text" class="form-control" id="exact_location" placeholder="city hall way" />
      </div>
    </div> 
    <lable for="description_of_accident">Description of Accident: how did this happen? Why id it happen?</lable>
    <textarea class="form-control" rows="5"></textarea>
    <lable class="form_space" for="how_to_prevent">How can we prevent this from happening again?</lable>
    <textarea class="form-control" rows="5"></textarea> 
    <div class="form_space">
    <div class="form-group">
        <label for="witnesses">Witnesses</label>
        <input type="text" class="form-control" id="witnesses" placeholder="witnesses" />
      </div>
    </div>
    <div>Is this a reoccurring injury? 
    <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Yes
    </label>
    <label class="radio-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> No
    </label>
    </div>
    <div>Have you sought medical attenton for this injury? 
    <label class="radio-inline">
        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Yes
    </label>
    <label class="radio-inline">
      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> No
    </label>
    </div>
   <div class="form-inline form_space">
      <div class="form-group">
        <label for="witnesses">If yes, what is the doctor's name?</label>
        <input type="text" class="form-control" id="witnesses" placeholder="Mike Winter" />
      </div>
      <div class="form-group">
        <label for="doctor_phone">Doctor's phone number</label>
        <input type="phone" class="form-control" id="doctor_phone" placeholder="617-444-5555" />
      </div>
      <div class="form-group">
        <label for="doctor_phone">Doctor's fax</label>
        <input type="fax" class="form-control" id="doctor_fax" placeholder="617-666-7777" />
      </div>
    </div>
    </div>
    <div class="form_border">
    <label>Note: All medical notes must be submitted to Human Resources after each visit should you wish the bills to be paid for under worker's compensation.</label>
    <label>Note: Any false or misleading statements representation or submissions affecting a claim for workers's compensation are punishable as a felony and/or fine and criminal restitution pursuant to M.G.L. c. 152 § 14.  Signed under pains and penalties of injury.</label>
    </div>
    <!---signiture section -->
    <div class="form-inline form_space">
     <div class="form-group">
        <label for="signature">Employee's Signature</label>
        <input type="text" class="form-control" id="signature" placeholder=" " />
      </div>
      <div class="form-group">
        <label for="date_of_signature">Date</label>
        <input type="date" class="form-control" id="date_of_signature" placeholder="<?php echo date("m/d/Y"); ?>" />
      </div>

    </div>
    <span>(NOTE: <span class="req">*</span> indicates required fields)</span><br />
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>