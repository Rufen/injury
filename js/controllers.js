var injuryControllers = angular.module('injuryControllers', ['ui.bootstrap']);//ui.mask

injuryControllers.controller('InjuryController', ['$scope', '$http', '$routeParams','$filter', function($scope, $http, $routeParams, $filter) {
    $scope.fname='';
    $scope.lname=''; 
    $scope.mi='';
    $scope.street='';
    $scope.city='';
    $scope.state='';
    $scope.zip='';
    $scope.hphone='';
    $scope.cphone='';
    $scope.email='';
    $scope.jobtitle='';
    $scope.dept='';
    $scope.worklocation='';
    $scope.supervisor='';
    $scope.depthead='';
    $scope.ss='';
    $scope.dob=''; 
    $scope.it='';
    $scope.partinjured='';
    $scope.exactlocation='';
    $scope.injurydescription='';
    $scope.howtoprevent='';
    $scope.witnesses='';
    $scope.reoccurring ='';
    $scope.medicalattention ='';
    $scope.doctorname='';
    $scope.doctorphone='';
    $scope.doctorfax='';
    $scope.empsigninature='';
    $scope.dt='';    
    $scope.timepart={};
    $scope.timepart.hstep='';
    $scope.timepart.mstep='';
    $scope.timepart.ampm='';

   var defaultForm = {lname: '', fname: '', mi: '', street: '', city: '', state: '', zip: '', hphone: '', cphone: '', email: '', jobtitle: '', dept: '', worklocation: '', supervisor: '', depthead: '', ss: '', dob: '', it: '', partinjured: '', exactlocation: '', injurydescription: '', howtoprevent: '', witnesses: '', reoccurring: '', medicalattention: '', doctorname: '', doctorphone: '', doctorfax: '', empsigninature: '', dt: ''};
   //reported previously
   
   $scope.getOne=function(){
    $scope.injuryreport.lname = $scope.item.lname;
    $scope.injuryreport.fname = $scope.item.fname;
    $scope.injuryreport.mi = $scope.item.mi;
   };
  //Date calendarpicker begins
    $scope.today = function() {
    $scope.dob = new Date();
    $scope.it = new Date();
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dob = null;
    $scope.it = null;
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  //dob
  $scope.open_dob = function($event) {
    $scope.opened_dob = true;
  }
  //injury date
  $scope.open_it = function($event) {
    $scope.opened_it = true;
  }  
//signature date
  $scope.open_dt = function($event) {
    $scope.opened_dt = true;
  }

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MM/dd/yyyy', 'MMMM dd, yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
  //date calendar ends
  //hour and minute picker begins
  $scope.mytime = new Date();
  $scope.timepart.hstep = 1;
  $scope.timepart.mstep = 00;
  $scope.timepart.ampm = "AM";
  $scope.dept = "Accounting/Comptroller";

  $scope.options = {
    hstep: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    mstep: [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    ampm: ["AM", "PM"],
    dept:["Accounting/Comptroller", "Accessing", "Bildings: City Hall", "Bildings: Library", "Clerk's Office", "Cultural Affairs", "Customer Service", "Department of Public Works: Highway", "Department of Public Works: Utilities", "Department of Public Works: Utilities Water", "Department of Public Works: Utilities Sewer", "Department of Public Works: Garage", "Department of Public Works: Traffic", "Department of Public Works: Rumford Ave", "Executive Office", "Financial Information Systems", "Fire", "Health and Human Services", "Human Resources", "Information Technology", "Inspectional Services", "Library", "Law", "Executive Office", "Parks & Recreation", "Planning", "Police", "Purchasing", "Purchasing: Procurement", "Purchasing: Print Shop", "Retirement", "School Department", "School Department: Teachers", "School Department: Custodians", "School Department: School Nurses", "Treasury", "Veteran's Services"]
     };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 00 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
  //sought medical section show and hide if yes or no condition
  $scope.soughtmed=true;
  $scope.medyesno=function(yesno){
    if (yesno == 'y'){$scope.soughtmed= false;} else if(yesno='n') {$scope.soughtmed=true;} else {$scope.soughtmed= true;}
  };
  //end of sought medical show and hide section
  $scope.concate=function(){return $scope.timepart.hstep + ":" +$scope.timepart.mstep + " " + $scope.timepart.ampm;};
 console.log($scope.concate);

 //body injury selection section
        $scope.groupinfo = true;
        $scope.toggleInfo = function() {
            $scope.groupinfo = $scope.groupinfo === false ? true: false;
            $scope.group = true;
            $scope.group2 = true;
            $scope.group3 = true;
        };
        $scope.group = true;
        $scope.toggleGroup = function() {
            $scope.group = $scope.group === false ? true: false;
            $scope.groupinfo = true;
            $scope.group2 = true;
            $scope.group3 = true;
        };
        $scope.group2 = true;
        $scope.toggleGroup2 = function() {
            $scope.group2 = $scope.group2 === false ? true: false;
            $scope.groupinfo = true;
            $scope.group = true;
            $scope.group3 = true;
        };
        $scope.group3 = true;
        $scope.toggleGroup3 = function() {
            $scope.group3 = $scope.group3 === false ? true: false;
            $scope.groupinfo = true;
            $scope.group2 = true;
            $scope.group = true;
        };
      $scope.checkboxModel={};
      $scope.checkboxModel.value1='';
      $scope.checkboxModel.value2='';
      $scope.checkboxModel.value07='';
      $scope.checkboxModel.value08='';
      $scope.checkboxModel.value09='';
      $scope.checkboxModel.value10='';
      $scope.checkboxModel.value12='';
      $scope.checkboxModel.value13='';
      $scope.checkboxModel.value14='';
      $scope.checkboxModel.value15='';
      $scope.checkboxModel.value16='';
      $scope.checkboxModel.value17='';
      $scope.checkboxModel.value20='';
      $scope.checkboxModel.value21='';
      $scope.checkboxModel.value22='';
      $scope.checkboxModel.value23='';
      $scope.checkboxModel.value24='';
      $scope.checkboxModel.value25='';
      $scope.checkboxModel.value26='';
      $scope.checkboxModel.value27='';
      $scope.checkboxModel.value28='';
      $scope.checkboxModel.value29='';
      $scope.checkboxModel.value30='';
      $scope.checkboxModel.value31='';
      $scope.checkboxModel.value32='';
      $scope.checkboxModel.value33='';
      $scope.checkboxModel.value34='';
      $scope.checkboxModel.value35='';
      $scope.checkboxModel.value36='';
      $scope.checkboxModel.value37='';
      $scope.checkboxModel.value38='';
      $scope.checkboxModel.value39='';
      $scope.checkboxModel.value40='';
      $scope.checkboxModel.value41='';
      $scope.checkboxModel.value42='';
      $scope.checkboxModel.value43='';
      $scope.checkboxModel.value44='';
      $scope.checkboxModel.value45='';
      $scope.checkboxModel.value46='';
      $scope.checkboxModel.value47='';
      $scope.checkboxModel.value48='';
      $scope.checkboxModel.value49='';
      $scope.checkboxModel.value50='';
      $scope.checkboxModel.value51='';
      $scope.checkboxModel.value52='';
      $scope.checkboxModel.value53='';
      $scope.checkboxModel.value54='';
      $scope.checkboxModel.value55='';
      $scope.checkboxModel.value56='';
      $scope.checkboxModel.value57='';
      $scope.checkboxModel.value58='';
      $scope.checkboxModel.value59='';
      $scope.checkboxModel.value60='';
      $scope.checkboxModel.value61='';
      $scope.checkboxModel.value62='';
      $scope.checkboxModel.value63='';
      $scope.checkboxModel.value64='';
      $scope.checkboxModel.value65='';
      $scope.checkboxModel.value67='';
      $scope.checkboxModel.value70='';
      $scope.checkboxModel.value72='';
      $scope.checkboxModel.value73='';
      $scope.checkboxModel.value75='';
      $scope.checkboxModel.value76='';
      $scope.checkboxModel.value78='';
      $scope.checkboxModel.value79='';
      $scope.checkboxModel.value80='';
      $scope.checkboxModel.value81='';
      $scope.checkboxModel.value82='';
      $scope.checkboxModel.value83='';
      $scope.checkboxModel.value84='';
      $scope.checkboxModel.value86='';
      $scope.checkboxModel.value87='';
      $scope.checkboxModel.value88='';
      $scope.checkboxModel.value89='';
      $scope.checkboxModel.value91='';
      $scope.checkboxModel.value92='';
      $scope.checkboxModel.value93='';
      $scope.checkboxModel.value94='';
      $scope.checkboxModel.value95='';
      $scope.checkboxModel.value96='';
      $scope.checkboxModel.value97='';
      $scope.checkboxModel.value99='';
      //group 2
      $scope.checkboxModel.value100='';
      $scope.checkboxModel.value110='';
      $scope.checkboxModel.value120='';
      $scope.checkboxModel.value130='';
      $scope.checkboxModel.value140='';
      $scope.checkboxModel.value160='';
      $scope.checkboxModel.value170='';
      $scope.checkboxModel.value190='';
      $scope.checkboxModel.value200='';
      $scope.checkboxModel.value210='';
      $scope.checkboxModel.value250='';
      $scope.checkboxModel.value300='';
      $scope.checkboxModel.value310='';
      $scope.checkboxModel.value400='';
      $scope.checkboxModel.value900='';
      $scope.checkboxModel.value950='';
      $scope.checkboxModel.value995='';
      $scope.checkboxModel.value999='';
      $scope.checkboxModel.value150='';
      $scope.checkboxModel.value151='';
      $scope.checkboxModel.value152='';
      $scope.checkboxModel.value153='';
      $scope.checkboxModel.value154='';
      $scope.checkboxModel.value156='';
      $scope.checkboxModel.value157='';
      $scope.checkboxModel.value159='';
      $scope.checkboxModel.value180='';
      $scope.checkboxModel.value183='';
      $scope.checkboxModel.value184='';
      $scope.checkboxModel.value185='';
      $scope.checkboxModel.value189='';
      $scope.checkboxModel.value270='';
      $scope.checkboxModel.value271='';
      $scope.checkboxModel.value272='';
      $scope.checkboxModel.value273='';
      $scope.checkboxModel.value274='';
      $scope.checkboxModel.value276='';
      $scope.checkboxModel.value278='';
      $scope.checkboxModel.value279='';
      $scope.checkboxModel.value570='';
      $scope.checkboxModel.value571='';
      $scope.checkboxModel.value572='';
      $scope.checkboxModel.value280='';
      $scope.checkboxModel.value281='';
      $scope.checkboxModel.value282='';
      $scope.checkboxModel.value283='';
      $scope.checkboxModel.value284='';
      $scope.checkboxModel.value285='';
      $scope.checkboxModel.value286='';
      $scope.checkboxModel.value287='';
      $scope.checkboxModel.value289='';
      $scope.checkboxModel.value560='';
      $scope.checkboxModel.value561='';
      $scope.checkboxModel.value562='';
      $scope.checkboxModel.value550='';
      $scope.checkboxModel.value551='';
      $scope.checkboxModel.value552='';
      $scope.checkboxModel.value290='';
      $scope.checkboxModel.value291='';
      $scope.checkboxModel.value292='';
      $scope.checkboxModel.value293='';
      $scope.checkboxModel.value294='';
      $scope.checkboxModel.value295='';
      $scope.checkboxModel.value265='';
      $scope.checkboxModel.value510='';
      $scope.checkboxModel.value520='';
      $scope.checkboxModel.value500='';
      $scope.checkboxModel.value240='';
      $scope.checkboxModel.value220='';
      $scope.checkboxModel.value530='';
      $scope.checkboxModel.value230='';
      $scope.checkboxModel.value991='';
      $scope.checkboxModel.value320='';
      $scope.checkboxModel.value330='';
      $scope.checkboxModel.value275='';
      $scope.checkboxModel.value260='';
      $scope.checkboxModel.value540='';
      $scope.checkboxModel.value2900='';
      $scope.checkboxModel.value2999='';
      $scope.checkboxModel.value990='';
      $scope.checkboxModel.value580='';
      //group 
      $scope.checkboxModel.value3100='';
      $scope.checkboxModel.value3110='';
      $scope.checkboxModel.value3120='';
      $scope.checkboxModel.value3121='';
      $scope.checkboxModel.value3124='';
      $scope.checkboxModel.value3130='';
      $scope.checkboxModel.value3140='';
      $scope.checkboxModel.value3141='';
      $scope.checkboxModel.value3144='';
      $scope.checkboxModel.value3146='';
      $scope.checkboxModel.value3148='';
      $scope.checkboxModel.value3149='';
      $scope.checkboxModel.value3150='';
      $scope.checkboxModel.value3160='';
      $scope.checkboxModel.value3198='';
      $scope.checkboxModel.value3200='';
      $scope.checkboxModel.value3300='';
      $scope.checkboxModel.value3310='';
      $scope.checkboxModel.value3311='';
      $scope.checkboxModel.value3313='';
      $scope.checkboxModel.value3315='';
      $scope.checkboxModel.value3318='';
      $scope.checkboxModel.value3319='';
      $scope.checkboxModel.value3320='';
      $scope.checkboxModel.value3330='';
      $scope.checkboxModel.value3340='';
      $scope.checkboxModel.value3398='';
      $scope.checkboxModel.value3400='';
      $scope.checkboxModel.value3410='';
      $scope.checkboxModel.value3420='';
      $scope.checkboxModel.value3430='';
      $scope.checkboxModel.value3440='';
      $scope.checkboxModel.value3450='';
      $scope.checkboxModel.value3498='';
      $scope.checkboxModel.value3500='';
      $scope.checkboxModel.value3510='';
      $scope.checkboxModel.value3513='';
      $scope.checkboxModel.value3515='';
      $scope.checkboxModel.value3518='';
      $scope.checkboxModel.value3519='';
      $scope.checkboxModel.value3520='';
      $scope.checkboxModel.value3530='';
      $scope.checkboxModel.value3540='';
      $scope.checkboxModel.value3598='';
      $scope.checkboxModel.value3700='';
      $scope.checkboxModel.value3999='';
      $scope.injurytypes='';
      $scope.injurytypes=function(){return $scope.checkboxModel.value1+$scope.checkboxModel.value2+$scope.checkboxModel.value07+$scope.checkboxModel.value08+$scope.checkboxModel.value09+$scope.checkboxModel.value10+$scope.checkboxModel.value12+$scope.checkboxModel.value13+$scope.checkboxModel.value14+$scope.checkboxModel.value15+$scope.checkboxModel.value16+$scope.checkboxModel.value17+$scope.checkboxModel.value20+$scope.checkboxModel.value21+$scope.checkboxModel.value22+$scope.checkboxModel.value23+$scope.checkboxModel.value24+$scope.checkboxModel.value25+$scope.checkboxModel.value26+$scope.checkboxModel.value27+$scope.checkboxModel.value28+$scope.checkboxModel.value29+$scope.checkboxModel.value30+$scope.checkboxModel.value31+$scope.checkboxModel.value32+$scope.checkboxModel.value33+$scope.checkboxModel.value34+$scope.checkboxModel.value35+$scope.checkboxModel.value36+$scope.checkboxModel.value37+$scope.checkboxModel.value38+$scope.checkboxModel.value39+$scope.checkboxModel.value40+$scope.checkboxModel.value41+$scope.checkboxModel.value42+$scope.checkboxModel.value43+$scope.checkboxModel.value44+$scope.checkboxModel.value45+$scope.checkboxModel.value46+$scope.checkboxModel.value47+$scope.checkboxModel.value48+$scope.checkboxModel.value49+$scope.checkboxModel.value50+$scope.checkboxModel.value51+$scope.checkboxModel.value52+$scope.checkboxModel.value53+$scope.checkboxModel.value54+$scope.checkboxModel.value55+$scope.checkboxModel.value56+$scope.checkboxModel.value57+$scope.checkboxModel.value58+$scope.checkboxModel.value59+$scope.checkboxModel.value60+$scope.checkboxModel.value61+$scope.checkboxModel.value62+$scope.checkboxModel.value63+$scope.checkboxModel.value64+$scope.checkboxModel.value65+$scope.checkboxModel.value67+$scope.checkboxModel.value70+$scope.checkboxModel.value72+$scope.checkboxModel.value73+$scope.checkboxModel.value75+$scope.checkboxModel.value76+$scope.checkboxModel.value78+$scope.checkboxModel.value79+$scope.checkboxModel.value80+$scope.checkboxModel.value81+$scope.checkboxModel.value82+$scope.checkboxModel.value83+$scope.checkboxModel.value84+$scope.checkboxModel.value86+$scope.checkboxModel.value87+$scope.checkboxModel.value88+$scope.checkboxModel.value89+$scope.checkboxModel.value91+$scope.checkboxModel.value92+$scope.checkboxModel.value93+$scope.checkboxModel.value94+$scope.checkboxModel.value95+$scope.checkboxModel.value96+$scope.checkboxModel.value97+$scope.checkboxModel.value99+$scope.checkboxModel.value100+$scope.checkboxModel.value110+$scope.checkboxModel.value120+$scope.checkboxModel.value130+$scope.checkboxModel.value140+$scope.checkboxModel.value160+$scope.checkboxModel.value170+$scope.checkboxModel.value190+$scope.checkboxModel.value200+$scope.checkboxModel.value210+$scope.checkboxModel.value250+$scope.checkboxModel.value300+$scope.checkboxModel.value310+$scope.checkboxModel.value400+$scope.checkboxModel.value900+$scope.checkboxModel.value950+$scope.checkboxModel.value995+$scope.checkboxModel.value999+$scope.checkboxModel.value150+$scope.checkboxModel.value151+$scope.checkboxModel.value152+$scope.checkboxModel.value153+$scope.checkboxModel.value154+$scope.checkboxModel.value156+$scope.checkboxModel.value157+$scope.checkboxModel.value159+$scope.checkboxModel.value180+$scope.checkboxModel.value183+$scope.checkboxModel.value184+$scope.checkboxModel.value185+$scope.checkboxModel.value189+$scope.checkboxModel.value270+$scope.checkboxModel.value271+$scope.checkboxModel.value272+$scope.checkboxModel.value273+$scope.checkboxModel.value274+$scope.checkboxModel.value276+$scope.checkboxModel.value278+$scope.checkboxModel.value279+$scope.checkboxModel.value570+$scope.checkboxModel.value571+$scope.checkboxModel.value572+$scope.checkboxModel.value280+$scope.checkboxModel.value281+$scope.checkboxModel.value282+$scope.checkboxModel.value283+$scope.checkboxModel.value284+$scope.checkboxModel.value285+$scope.checkboxModel.value286+$scope.checkboxModel.value287+$scope.checkboxModel.value289+$scope.checkboxModel.value560+$scope.checkboxModel.value561+$scope.checkboxModel.value562+$scope.checkboxModel.value550+$scope.checkboxModel.value551+$scope.checkboxModel.value552+$scope.checkboxModel.value290+$scope.checkboxModel.value291+$scope.checkboxModel.value292+$scope.checkboxModel.value293+$scope.checkboxModel.value294+$scope.checkboxModel.value295+$scope.checkboxModel.value265+$scope.checkboxModel.value510+$scope.checkboxModel.value520+$scope.checkboxModel.value500+$scope.checkboxModel.value240+$scope.checkboxModel.value220+$scope.checkboxModel.value530+$scope.checkboxModel.value230+$scope.checkboxModel.value991+$scope.checkboxModel.value320+$scope.checkboxModel.value330+$scope.checkboxModel.value275+$scope.checkboxModel.value260+$scope.checkboxModel.value540+$scope.checkboxModel.value2900+$scope.checkboxModel.value2999+$scope.checkboxModel.value990+$scope.checkboxModel.value580+$scope.checkboxModel.value3100+$scope.checkboxModel.value3110+$scope.checkboxModel.value3120+$scope.checkboxModel.value3121+$scope.checkboxModel.value3124+$scope.checkboxModel.value3130+$scope.checkboxModel.value3140+$scope.checkboxModel.value3141+$scope.checkboxModel.value3144+$scope.checkboxModel.value3146+$scope.checkboxModel.value3148+$scope.checkboxModel.value3149+$scope.checkboxModel.value3150+$scope.checkboxModel.value3160+$scope.checkboxModel.value3198+$scope.checkboxModel.value3200+$scope.checkboxModel.value3300+$scope.checkboxModel.value3310+$scope.checkboxModel.value3311+$scope.checkboxModel.value3313+$scope.checkboxModel.value3315+$scope.checkboxModel.value3318+$scope.checkboxModel.value3319+$scope.checkboxModel.value3320+$scope.checkboxModel.value3330+$scope.checkboxModel.value3340+$scope.checkboxModel.value3398+$scope.checkboxModel.value3400+$scope.checkboxModel.value3410+$scope.checkboxModel.value3420+$scope.checkboxModel.value3430+$scope.checkboxModel.value3440+$scope.checkboxModel.value3450+$scope.checkboxModel.value3498+$scope.checkboxModel.value3500+$scope.checkboxModel.value3510+$scope.checkboxModel.value3513+$scope.checkboxModel.value3515+$scope.checkboxModel.value3518+$scope.checkboxModel.value3519+$scope.checkboxModel.value3520+$scope.checkboxModel.value3530+$scope.checkboxModel.value3540+$scope.checkboxModel.value3598+$scope.checkboxModel.value3700+$scope.checkboxModel.value3999;};
 //end of body injury selection section
 $scope.insertdata=function(injuryreport){
      $http.post("js/input.php", {'lname':$scope.injuryreport.lname, 'fname':$scope.injuryreport.fname, 'mi':$scope.injuryreport.mi, 'street':$scope.injuryreport.street, 'city':$scope.injuryreport.city, 'state':$scope.injuryreport.state, 'zip':$scope.injuryreport.zip, 'hphone':$scope.injuryreport.hphone, 'cphone':$scope.injuryreport.cphone, 'email':$scope.injuryreport.email, 'jobtitle':$scope.injuryreport.jobtitle, 'dept':$scope.injuryreport.dept, 'worklocation':$scope.injuryreport.worklocation, 'supervisor':$scope.injuryreport.supervisor, 'depthead':$scope.injuryreport.depthead, 'ss':$scope.injuryreport.ss, 'dob':(($scope.dob).toLocaleDateString()), 'injury_it':(($scope.it).toLocaleDateString()), 'injury_hr_concate':$scope.concate(), 'partinjured':$scope.injurytypes(), 'exactlocation':$scope.injuryreport.exactlocation, 'injurydescription':$scope.injuryreport.injurydescription, 'howtoprevent':$scope.injuryreport.howtoprevent, 'witnesses':$scope.injuryreport.witnesses, 'reoccurring':$scope.injuryreport.reoccurring, 'medicalattention':$scope.injuryreport.medicalattention, 'doctorname':$scope.injuryreport.doctorname, 'doctorphone':$scope.injuryreport.doctorphone, 'doctorfax':$scope.injuryreport.doctorfax, 'empsigninature':$scope.injuryreport.empsigninature, 'signature_dt':(($scope.dt).toLocaleDateString())})
      .success(function(data,status,headers,config){
        console.log("data inserted successfully");
        $scope.injuryForm.$setPristine();
        $scope.injuryreport = defaultForm;
      });
    }

}]);
injuryControllers.controller('InjuryReportedController', ['$scope', '$http', '$routeParams','$filter', function($scope, $http, $routeParams, $filter) {
    $scope.fname='';
    $scope.lname=''; 
    $scope.mi='';
    $scope.street='';
    $scope.city='';
    $scope.state='';
    $scope.zip='';
    $scope.hphone='';
    $scope.cphone='';
    $scope.email='';
    $scope.jobtitle='';
    $scope.dept='';
    $scope.worklocation='';
    $scope.supervisor='';
    $scope.depthead='';
    $scope.ss='';
    $scope.dob=''; 
    $scope.it='';
    $scope.partinjured='';
    $scope.exactlocation='';
    $scope.injurydescription='';
    $scope.howtoprevent='';
    $scope.witnesses='';
    $scope.reoccurring ='';
    $scope.medicalattention ='';
    $scope.doctorname='';
    $scope.doctorphone='';
    $scope.doctorfax='';
    $scope.empsigninature='';
    $scope.dt='';    
    $scope.timepart={};
    $scope.timepart.hstep='';
    $scope.timepart.mstep='';
    $scope.timepart.ampm='';

   var defaultForm = {lname: '', fname: '', mi: '', street: '', city: '', state: '', zip: '', hphone: '', cphone: '', email: '', jobtitle: '', dept: '', worklocation: '', supervisor: '', depthead: '', ss: '', dob: '', it: '', partinjured: '', exactlocation: '', injurydescription: '', howtoprevent: '', witnesses: '', reoccurring: '', medicalattention: '', doctorname: '', doctorphone: '', doctorfax: '', empsigninature: '', dt: ''};
   //reported previously
   
   $scope.getOne=function(){
    $scope.injuryreport.lname = $scope.item.lname;
    $scope.injuryreport.fname = $scope.item.fname;
    $scope.injuryreport.mi = $scope.item.mi;
   };
  //Date calendarpicker begins
    $scope.today = function() {
    $scope.dob = new Date();
    $scope.it = new Date();
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dob = null;
    $scope.it = null;
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  //dob
  $scope.open_dob = function($event) {
    $scope.opened_dob = true;
  }
  //injury date
  $scope.open_it = function($event) {
    $scope.opened_it = true;
  }  
//signature date
  $scope.open_dt = function($event) {
    $scope.opened_dt = true;
  }

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MM/dd/yyyy', 'MMMM dd, yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
  //date calendar ends
  //hour and minute picker begins
  $scope.mytime = new Date();
  $scope.timepart.hstep = 1;
  $scope.timepart.mstep = 00;
  $scope.timepart.ampm = "AM";
  $scope.dept = "Accounting/Comptroller";

  $scope.options = {
    hstep: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    mstep: [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    ampm: ["AM", "PM"],
    dept:["Accounting/Comptroller", "Accessing", "Bildings: City Hall", "Bildings: Library", "Clerk's Office", "Cultural Affairs", "Customer Service", "Department of Public Works: Highway", "Department of Public Works: Utilities", "Department of Public Works: Utilities Water", "Department of Public Works: Utilities Sewer", "Department of Public Works: Garage", "Department of Public Works: Traffic", "Department of Public Works: Rumford Ave", "Executive Office", "Financial Information Systems", "Fire", "Health and Human Services", "Human Resources", "Information Technology", "Inspectional Services", "Library", "Law", "Executive Office", "Parks & Recreation", "Planning", "Police", "Purchasing", "Purchasing: Procurement", "Purchasing: Print Shop", "Retirement", "School Department", "School Department: Teachers", "School Department: Custodians", "School Department: School Nurses", "Treasury", "Veteran's Services"]
     };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 00 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
  //sought medical section show and hide if yes or no condition
  $scope.soughtmed=true;
  $scope.medyesno=function(yesno){
    if (yesno == 'y'){$scope.soughtmed= false;} else if(yesno='n') {$scope.soughtmed=true;} else {$scope.soughtmed= true;}
  };
  //end of sought medical show and hide section
  $scope.concate=function(){return $scope.timepart.hstep + ":" +$scope.timepart.mstep + " " + $scope.timepart.ampm;};
 console.log($scope.concate);

 //body injury selection section
        $scope.groupinfo = true;
        $scope.toggleInfo = function() {
            $scope.groupinfo = $scope.groupinfo === false ? true: false;
            $scope.group = true;
            $scope.group2 = true;
            $scope.group3 = true;
        };
        $scope.group = true;
        $scope.toggleGroup = function() {
            $scope.group = $scope.group === false ? true: false;
            $scope.groupinfo = true;
            $scope.group2 = true;
            $scope.group3 = true;
        };
        $scope.group2 = true;
        $scope.toggleGroup2 = function() {
            $scope.group2 = $scope.group2 === false ? true: false;
            $scope.groupinfo = true;
            $scope.group = true;
            $scope.group3 = true;
        };
        $scope.group3 = true;
        $scope.toggleGroup3 = function() {
            $scope.group3 = $scope.group3 === false ? true: false;
            $scope.groupinfo = true;
            $scope.group2 = true;
            $scope.group = true;
        };
      $scope.checkboxModel={};
      $scope.checkboxModel.value1='';
      $scope.checkboxModel.value2='';
      $scope.checkboxModel.value07='';
      $scope.checkboxModel.value08='';
      $scope.checkboxModel.value09='';
      $scope.checkboxModel.value10='';
      $scope.checkboxModel.value12='';
      $scope.checkboxModel.value13='';
      $scope.checkboxModel.value14='';
      $scope.checkboxModel.value15='';
      $scope.checkboxModel.value16='';
      $scope.checkboxModel.value17='';
      $scope.checkboxModel.value20='';
      $scope.checkboxModel.value21='';
      $scope.checkboxModel.value22='';
      $scope.checkboxModel.value23='';
      $scope.checkboxModel.value24='';
      $scope.checkboxModel.value25='';
      $scope.checkboxModel.value26='';
      $scope.checkboxModel.value27='';
      $scope.checkboxModel.value28='';
      $scope.checkboxModel.value29='';
      $scope.checkboxModel.value30='';
      $scope.checkboxModel.value31='';
      $scope.checkboxModel.value32='';
      $scope.checkboxModel.value33='';
      $scope.checkboxModel.value34='';
      $scope.checkboxModel.value35='';
      $scope.checkboxModel.value36='';
      $scope.checkboxModel.value37='';
      $scope.checkboxModel.value38='';
      $scope.checkboxModel.value39='';
      $scope.checkboxModel.value40='';
      $scope.checkboxModel.value41='';
      $scope.checkboxModel.value42='';
      $scope.checkboxModel.value43='';
      $scope.checkboxModel.value44='';
      $scope.checkboxModel.value45='';
      $scope.checkboxModel.value46='';
      $scope.checkboxModel.value47='';
      $scope.checkboxModel.value48='';
      $scope.checkboxModel.value49='';
      $scope.checkboxModel.value50='';
      $scope.checkboxModel.value51='';
      $scope.checkboxModel.value52='';
      $scope.checkboxModel.value53='';
      $scope.checkboxModel.value54='';
      $scope.checkboxModel.value55='';
      $scope.checkboxModel.value56='';
      $scope.checkboxModel.value57='';
      $scope.checkboxModel.value58='';
      $scope.checkboxModel.value59='';
      $scope.checkboxModel.value60='';
      $scope.checkboxModel.value61='';
      $scope.checkboxModel.value62='';
      $scope.checkboxModel.value63='';
      $scope.checkboxModel.value64='';
      $scope.checkboxModel.value65='';
      $scope.checkboxModel.value67='';
      $scope.checkboxModel.value70='';
      $scope.checkboxModel.value72='';
      $scope.checkboxModel.value73='';
      $scope.checkboxModel.value75='';
      $scope.checkboxModel.value76='';
      $scope.checkboxModel.value78='';
      $scope.checkboxModel.value79='';
      $scope.checkboxModel.value80='';
      $scope.checkboxModel.value81='';
      $scope.checkboxModel.value82='';
      $scope.checkboxModel.value83='';
      $scope.checkboxModel.value84='';
      $scope.checkboxModel.value86='';
      $scope.checkboxModel.value87='';
      $scope.checkboxModel.value88='';
      $scope.checkboxModel.value89='';
      $scope.checkboxModel.value91='';
      $scope.checkboxModel.value92='';
      $scope.checkboxModel.value93='';
      $scope.checkboxModel.value94='';
      $scope.checkboxModel.value95='';
      $scope.checkboxModel.value96='';
      $scope.checkboxModel.value97='';
      $scope.checkboxModel.value99='';
      //group 2
      $scope.checkboxModel.value100='';
      $scope.checkboxModel.value110='';
      $scope.checkboxModel.value120='';
      $scope.checkboxModel.value130='';
      $scope.checkboxModel.value140='';
      $scope.checkboxModel.value160='';
      $scope.checkboxModel.value170='';
      $scope.checkboxModel.value190='';
      $scope.checkboxModel.value200='';
      $scope.checkboxModel.value210='';
      $scope.checkboxModel.value250='';
      $scope.checkboxModel.value300='';
      $scope.checkboxModel.value310='';
      $scope.checkboxModel.value400='';
      $scope.checkboxModel.value900='';
      $scope.checkboxModel.value950='';
      $scope.checkboxModel.value995='';
      $scope.checkboxModel.value999='';
      $scope.checkboxModel.value150='';
      $scope.checkboxModel.value151='';
      $scope.checkboxModel.value152='';
      $scope.checkboxModel.value153='';
      $scope.checkboxModel.value154='';
      $scope.checkboxModel.value156='';
      $scope.checkboxModel.value157='';
      $scope.checkboxModel.value159='';
      $scope.checkboxModel.value180='';
      $scope.checkboxModel.value183='';
      $scope.checkboxModel.value184='';
      $scope.checkboxModel.value185='';
      $scope.checkboxModel.value189='';
      $scope.checkboxModel.value270='';
      $scope.checkboxModel.value271='';
      $scope.checkboxModel.value272='';
      $scope.checkboxModel.value273='';
      $scope.checkboxModel.value274='';
      $scope.checkboxModel.value276='';
      $scope.checkboxModel.value278='';
      $scope.checkboxModel.value279='';
      $scope.checkboxModel.value570='';
      $scope.checkboxModel.value571='';
      $scope.checkboxModel.value572='';
      $scope.checkboxModel.value280='';
      $scope.checkboxModel.value281='';
      $scope.checkboxModel.value282='';
      $scope.checkboxModel.value283='';
      $scope.checkboxModel.value284='';
      $scope.checkboxModel.value285='';
      $scope.checkboxModel.value286='';
      $scope.checkboxModel.value287='';
      $scope.checkboxModel.value289='';
      $scope.checkboxModel.value560='';
      $scope.checkboxModel.value561='';
      $scope.checkboxModel.value562='';
      $scope.checkboxModel.value550='';
      $scope.checkboxModel.value551='';
      $scope.checkboxModel.value552='';
      $scope.checkboxModel.value290='';
      $scope.checkboxModel.value291='';
      $scope.checkboxModel.value292='';
      $scope.checkboxModel.value293='';
      $scope.checkboxModel.value294='';
      $scope.checkboxModel.value295='';
      $scope.checkboxModel.value265='';
      $scope.checkboxModel.value510='';
      $scope.checkboxModel.value520='';
      $scope.checkboxModel.value500='';
      $scope.checkboxModel.value240='';
      $scope.checkboxModel.value220='';
      $scope.checkboxModel.value530='';
      $scope.checkboxModel.value230='';
      $scope.checkboxModel.value991='';
      $scope.checkboxModel.value320='';
      $scope.checkboxModel.value330='';
      $scope.checkboxModel.value275='';
      $scope.checkboxModel.value260='';
      $scope.checkboxModel.value540='';
      $scope.checkboxModel.value2900='';
      $scope.checkboxModel.value2999='';
      $scope.checkboxModel.value990='';
      $scope.checkboxModel.value580='';
      //group 
      $scope.checkboxModel.value3100='';
      $scope.checkboxModel.value3110='';
      $scope.checkboxModel.value3120='';
      $scope.checkboxModel.value3121='';
      $scope.checkboxModel.value3124='';
      $scope.checkboxModel.value3130='';
      $scope.checkboxModel.value3140='';
      $scope.checkboxModel.value3141='';
      $scope.checkboxModel.value3144='';
      $scope.checkboxModel.value3146='';
      $scope.checkboxModel.value3148='';
      $scope.checkboxModel.value3149='';
      $scope.checkboxModel.value3150='';
      $scope.checkboxModel.value3160='';
      $scope.checkboxModel.value3198='';
      $scope.checkboxModel.value3200='';
      $scope.checkboxModel.value3300='';
      $scope.checkboxModel.value3310='';
      $scope.checkboxModel.value3311='';
      $scope.checkboxModel.value3313='';
      $scope.checkboxModel.value3315='';
      $scope.checkboxModel.value3318='';
      $scope.checkboxModel.value3319='';
      $scope.checkboxModel.value3320='';
      $scope.checkboxModel.value3330='';
      $scope.checkboxModel.value3340='';
      $scope.checkboxModel.value3398='';
      $scope.checkboxModel.value3400='';
      $scope.checkboxModel.value3410='';
      $scope.checkboxModel.value3420='';
      $scope.checkboxModel.value3430='';
      $scope.checkboxModel.value3440='';
      $scope.checkboxModel.value3450='';
      $scope.checkboxModel.value3498='';
      $scope.checkboxModel.value3500='';
      $scope.checkboxModel.value3510='';
      $scope.checkboxModel.value3513='';
      $scope.checkboxModel.value3515='';
      $scope.checkboxModel.value3518='';
      $scope.checkboxModel.value3519='';
      $scope.checkboxModel.value3520='';
      $scope.checkboxModel.value3530='';
      $scope.checkboxModel.value3540='';
      $scope.checkboxModel.value3598='';
      $scope.checkboxModel.value3700='';
      $scope.checkboxModel.value3999='';
      $scope.injurytypes='';
      $scope.injurytypes=function(){return $scope.checkboxModel.value1+$scope.checkboxModel.value2+$scope.checkboxModel.value07+$scope.checkboxModel.value08+$scope.checkboxModel.value09+$scope.checkboxModel.value10+$scope.checkboxModel.value12+$scope.checkboxModel.value13+$scope.checkboxModel.value14+$scope.checkboxModel.value15+$scope.checkboxModel.value16+$scope.checkboxModel.value17+$scope.checkboxModel.value20+$scope.checkboxModel.value21+$scope.checkboxModel.value22+$scope.checkboxModel.value23+$scope.checkboxModel.value24+$scope.checkboxModel.value25+$scope.checkboxModel.value26+$scope.checkboxModel.value27+$scope.checkboxModel.value28+$scope.checkboxModel.value29+$scope.checkboxModel.value30+$scope.checkboxModel.value31+$scope.checkboxModel.value32+$scope.checkboxModel.value33+$scope.checkboxModel.value34+$scope.checkboxModel.value35+$scope.checkboxModel.value36+$scope.checkboxModel.value37+$scope.checkboxModel.value38+$scope.checkboxModel.value39+$scope.checkboxModel.value40+$scope.checkboxModel.value41+$scope.checkboxModel.value42+$scope.checkboxModel.value43+$scope.checkboxModel.value44+$scope.checkboxModel.value45+$scope.checkboxModel.value46+$scope.checkboxModel.value47+$scope.checkboxModel.value48+$scope.checkboxModel.value49+$scope.checkboxModel.value50+$scope.checkboxModel.value51+$scope.checkboxModel.value52+$scope.checkboxModel.value53+$scope.checkboxModel.value54+$scope.checkboxModel.value55+$scope.checkboxModel.value56+$scope.checkboxModel.value57+$scope.checkboxModel.value58+$scope.checkboxModel.value59+$scope.checkboxModel.value60+$scope.checkboxModel.value61+$scope.checkboxModel.value62+$scope.checkboxModel.value63+$scope.checkboxModel.value64+$scope.checkboxModel.value65+$scope.checkboxModel.value67+$scope.checkboxModel.value70+$scope.checkboxModel.value72+$scope.checkboxModel.value73+$scope.checkboxModel.value75+$scope.checkboxModel.value76+$scope.checkboxModel.value78+$scope.checkboxModel.value79+$scope.checkboxModel.value80+$scope.checkboxModel.value81+$scope.checkboxModel.value82+$scope.checkboxModel.value83+$scope.checkboxModel.value84+$scope.checkboxModel.value86+$scope.checkboxModel.value87+$scope.checkboxModel.value88+$scope.checkboxModel.value89+$scope.checkboxModel.value91+$scope.checkboxModel.value92+$scope.checkboxModel.value93+$scope.checkboxModel.value94+$scope.checkboxModel.value95+$scope.checkboxModel.value96+$scope.checkboxModel.value97+$scope.checkboxModel.value99+$scope.checkboxModel.value100+$scope.checkboxModel.value110+$scope.checkboxModel.value120+$scope.checkboxModel.value130+$scope.checkboxModel.value140+$scope.checkboxModel.value160+$scope.checkboxModel.value170+$scope.checkboxModel.value190+$scope.checkboxModel.value200+$scope.checkboxModel.value210+$scope.checkboxModel.value250+$scope.checkboxModel.value300+$scope.checkboxModel.value310+$scope.checkboxModel.value400+$scope.checkboxModel.value900+$scope.checkboxModel.value950+$scope.checkboxModel.value995+$scope.checkboxModel.value999+$scope.checkboxModel.value150+$scope.checkboxModel.value151+$scope.checkboxModel.value152+$scope.checkboxModel.value153+$scope.checkboxModel.value154+$scope.checkboxModel.value156+$scope.checkboxModel.value157+$scope.checkboxModel.value159+$scope.checkboxModel.value180+$scope.checkboxModel.value183+$scope.checkboxModel.value184+$scope.checkboxModel.value185+$scope.checkboxModel.value189+$scope.checkboxModel.value270+$scope.checkboxModel.value271+$scope.checkboxModel.value272+$scope.checkboxModel.value273+$scope.checkboxModel.value274+$scope.checkboxModel.value276+$scope.checkboxModel.value278+$scope.checkboxModel.value279+$scope.checkboxModel.value570+$scope.checkboxModel.value571+$scope.checkboxModel.value572+$scope.checkboxModel.value280+$scope.checkboxModel.value281+$scope.checkboxModel.value282+$scope.checkboxModel.value283+$scope.checkboxModel.value284+$scope.checkboxModel.value285+$scope.checkboxModel.value286+$scope.checkboxModel.value287+$scope.checkboxModel.value289+$scope.checkboxModel.value560+$scope.checkboxModel.value561+$scope.checkboxModel.value562+$scope.checkboxModel.value550+$scope.checkboxModel.value551+$scope.checkboxModel.value552+$scope.checkboxModel.value290+$scope.checkboxModel.value291+$scope.checkboxModel.value292+$scope.checkboxModel.value293+$scope.checkboxModel.value294+$scope.checkboxModel.value295+$scope.checkboxModel.value265+$scope.checkboxModel.value510+$scope.checkboxModel.value520+$scope.checkboxModel.value500+$scope.checkboxModel.value240+$scope.checkboxModel.value220+$scope.checkboxModel.value530+$scope.checkboxModel.value230+$scope.checkboxModel.value991+$scope.checkboxModel.value320+$scope.checkboxModel.value330+$scope.checkboxModel.value275+$scope.checkboxModel.value260+$scope.checkboxModel.value540+$scope.checkboxModel.value2900+$scope.checkboxModel.value2999+$scope.checkboxModel.value990+$scope.checkboxModel.value580+$scope.checkboxModel.value3100+$scope.checkboxModel.value3110+$scope.checkboxModel.value3120+$scope.checkboxModel.value3121+$scope.checkboxModel.value3124+$scope.checkboxModel.value3130+$scope.checkboxModel.value3140+$scope.checkboxModel.value3141+$scope.checkboxModel.value3144+$scope.checkboxModel.value3146+$scope.checkboxModel.value3148+$scope.checkboxModel.value3149+$scope.checkboxModel.value3150+$scope.checkboxModel.value3160+$scope.checkboxModel.value3198+$scope.checkboxModel.value3200+$scope.checkboxModel.value3300+$scope.checkboxModel.value3310+$scope.checkboxModel.value3311+$scope.checkboxModel.value3313+$scope.checkboxModel.value3315+$scope.checkboxModel.value3318+$scope.checkboxModel.value3319+$scope.checkboxModel.value3320+$scope.checkboxModel.value3330+$scope.checkboxModel.value3340+$scope.checkboxModel.value3398+$scope.checkboxModel.value3400+$scope.checkboxModel.value3410+$scope.checkboxModel.value3420+$scope.checkboxModel.value3430+$scope.checkboxModel.value3440+$scope.checkboxModel.value3450+$scope.checkboxModel.value3498+$scope.checkboxModel.value3500+$scope.checkboxModel.value3510+$scope.checkboxModel.value3513+$scope.checkboxModel.value3515+$scope.checkboxModel.value3518+$scope.checkboxModel.value3519+$scope.checkboxModel.value3520+$scope.checkboxModel.value3530+$scope.checkboxModel.value3540+$scope.checkboxModel.value3598+$scope.checkboxModel.value3700+$scope.checkboxModel.value3999;};
 //end of body injury selection section
 $scope.insertdata=function(injuryreport){
      $http.post("js/input.php", {'lname':$scope.injuryreport.lname, 'fname':$scope.injuryreport.fname, 'mi':$scope.injuryreport.mi, 'street':$scope.injuryreport.street, 'city':$scope.injuryreport.city, 'state':$scope.injuryreport.state, 'zip':$scope.injuryreport.zip, 'hphone':$scope.injuryreport.hphone, 'cphone':$scope.injuryreport.cphone, 'email':$scope.injuryreport.email, 'jobtitle':$scope.injuryreport.jobtitle, 'dept':$scope.injuryreport.dept, 'worklocation':$scope.injuryreport.worklocation, 'supervisor':$scope.injuryreport.supervisor, 'depthead':$scope.injuryreport.depthead, 'ss':$scope.injuryreport.ss, 'dob':(($scope.dob).toLocaleDateString()), 'injury_it':(($scope.it).toLocaleDateString()), 'injury_hr_concate':$scope.concate(), 'partinjured':$scope.injurytypes(), 'exactlocation':$scope.injuryreport.exactlocation, 'injurydescription':$scope.injuryreport.injurydescription, 'howtoprevent':$scope.injuryreport.howtoprevent, 'witnesses':$scope.injuryreport.witnesses, 'reoccurring':$scope.injuryreport.reoccurring, 'medicalattention':$scope.injuryreport.medicalattention, 'doctorname':$scope.injuryreport.doctorname, 'doctorphone':$scope.injuryreport.doctorphone, 'doctorfax':$scope.injuryreport.doctorfax, 'empsigninature':$scope.injuryreport.empsigninature, 'signature_dt':(($scope.dt).toLocaleDateString())})
      .success(function(data,status,headers,config){
        console.log("data inserted successfully");
        $scope.injuryForm.$setPristine();
        $scope.injuryreport = defaultForm;
      });
    }

}]);
injuryControllers.controller('SupervisorController', function($scope, $http, $routeParams, $log, $filter) {
    $scope.fname='';
    $scope.lname=''; 
    $scope.mi='';
    $scope.street='';
    $scope.city='';
    $scope.state='';
    $scope.zip='';
    $scope.hphone='';
    $scope.cphone='';
    $scope.email='';
    $scope.jobtitle='';
    $scope.dept='';
    $scope.worklocation='';
    $scope.supervisor='';
    $scope.depthead='';
    $scope.ss='';
    $scope.dob=''; 
    $scope.it='';
    $scope.partinjured='';
    $scope.exactlocation='';
    $scope.injurydescription='';
    $scope.howtoprevent='';
    $scope.witnesses='';
    $scope.reoccurring ='';
    $scope.medicalattention ='';
    $scope.doctorname='';
    $scope.doctorphone='';
    $scope.doctorfax='';
    $scope.empsigninature='';
    $scope.dt='';    
    $scope.timepart={};
    $scope.timepart.hstep='';
    $scope.timepart.mstep='';
    $scope.timepart.ampm='';

   var defaultForm = {lname: '', fname: '', mi: '', street: '', city: '', state: '', zip: '', hphone: '', cphone: '', email: '', jobtitle: '', dept: '', worklocation: '', supervisor: '', depthead: '', ss: '', dob: '', it: '', partinjured: '', exactlocation: '', injurydescription: '', howtoprevent: '', witnesses: '', reoccurring: '', medicalattention: '', doctorname: '', doctorphone: '', doctorfax: '', empsigninature: '', dt: ''};
  $http.get('js/data.php').success(function(data) {
    $scope.injuries = data;
  });
  //Date calendarpicker begins
    $scope.today = function() {
    $scope.dob = new Date();
    $scope.it = new Date();
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dob = null;
    $scope.it = null;
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  //dob
  $scope.open_dob = function($event) {
    $scope.opened_dob = true;
  }
  //injury date
  $scope.open_it = function($event) {
    $scope.opened_it = true;
  }  
//signature date
  $scope.open_dt = function($event) {
    $scope.opened_dt = true;
  }

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MM/dd/yyyy', 'MMMM dd, yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  //date calendar ends
  //hour and minute picker begins
  $scope.mytime = new Date();
  $scope.timepart.hstep = 1;
  $scope.timepart.mstep = 00;
  $scope.timepart.ampm = "AM";
  $scope.weekday="Monday";

  $scope.options = {
    hstep: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    mstep: [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    ampm: ["AM", "PM"],
    weekday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
     };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 00 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
  //sought medical section show and hide if yes or no condition
  $scope.soughtmed=true;
  $scope.medyesno=function(yesno){
    if (yesno == 'y'){$scope.soughtmed= false;} else if(yesno='n') {$scope.soughtmed=true;} else {$scope.soughtmed= true;}
  };
  //end of sought medical show and hide section
  
 $scope.concate=function(){return $scope.timepart.hstep + ":" +$scope.timepart.mstep + " " + $scope.timepart.ampm;};
 console.log($scope.concate);
 $scope.insertdata=function(injuryreport){
      $http.post("js/input.php", {'lname':$scope.injuryreport.lname, 'fname':$scope.injuryreport.fname, 'mi':$scope.injuryreport.mi, 'street':$scope.injuryreport.street, 'city':$scope.injuryreport.city, 'state':$scope.injuryreport.state, 'zip':$scope.injuryreport.zip, 'hphone':$scope.injuryreport.hphone, 'cphone':$scope.injuryreport.cphone, 'email':$scope.injuryreport.email, 'jobtitle':$scope.injuryreport.jobtitle, 'dept':$scope.injuryreport.dept, 'worklocation':$scope.injuryreport.worklocation, 'supervisor':$scope.injuryreport.supervisor, 'depthead':$scope.injuryreport.depthead, 'ss':$scope.injuryreport.ss, 'dob':(($scope.dob).toLocaleDateString()), 'injury_it':(($scope.it).toLocaleDateString()), 'injury_hr_concate':$scope.concate(), 'partinjured':$scope.injuryreport.partinjured, 'exactlocation':$scope.injuryreport.exactlocation, 'injurydescription':$scope.injuryreport.injurydescription, 'howtoprevent':$scope.injuryreport.howtoprevent, 'witnesses':$scope.injuryreport.witnesses, 'reoccurring':$scope.injuryreport.reoccurring, 'medicalattention':$scope.injuryreport.medicalattention, 'doctorname':$scope.injuryreport.doctorname, 'doctorphone':$scope.injuryreport.doctorphone, 'doctorfax':$scope.injuryreport.doctorfax, 'empsigninature':$scope.injuryreport.empsigninature, 'signature_dt':(($scope.dt).toLocaleDateString())})
      .success(function(data,status,headers,config){
        console.log("data inserted successfully");
        $scope.injuryForm.$setPristine();
        $scope.injuryreport = defaultForm;
      });
    }
//$scope.whichItem = $routeParams.itemId;
//end of insert data php
});


injuryControllers.controller('SummaryController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.php').success(function(data) {
    $scope.injuries = data;
    $scope.injuryOrder = 'lname';
  });
}]);

injuryControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.php').success(function(data) {
    $scope.injuries = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.injuries.length-1;
    }

    if ($routeParams.itemId < $scope.injuries.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

