//Projects
  //Create Project Service
  //Functions for Project Module
  //1. create Project
      // setProject(data:any){
      //   this.http.post(this.url , data).subscribe((res:any)=>{
      //     console.log(res);
      //   })
      // }
  //2. Get Project
      // getProject():Observable<any[]>{
      //   return this.http.get<any[]>(this.url)
      // }
  //3. Get Single Project from ProjectId - for Projct Details
      // getSingleProject(projectId : any)
      // {
      //  return this.http.get(`http://192.168.2.212:3000/projects/${projectId}`)
      // }
  //4. Update Project Details
  //5. Remove Project

//Team
  //Create Team Service
  //Functions For Team Module
  //1. Create Team
        // setTeam(data:any){
        //   this.http.post(this.url , data).subscribe((res:any)=>{
        //     console.log(res);
        //   })
        // }
  //2. Get Team
        // getTeam():Observable<any[]>{
        //   return this.http.get<any[]>(this.url)
        // }
  //3. Get Member Details From MemberId
        // getMember(memberId : any)
        // {
        //  return this.http.get(`http://192.168.2.212:3000/team/${memberId}`)
        // }
  //4. Update Member Details
        // updateMember(memberId: any, memberData: any): Observable<any> {
        //   return this.http.put(`${this.url}/${memberId}`, memberData);
        // }
  //5. Remove Member from Team
        // removeMember(memberId: any): Observable<any> {
        //   return this.http.delete(`${this.url}/${memberId}`);
        // }

//Task
  //Create Task Service
  //Functions for Task Module
  //1. Create Task
        // setTasks(data : any){
        //   this.http.post(this.url , data).subscribe((res:any)=>{
        //     console.log(res);
        //   })
        // }
  //2. Get Task
        // getTasks():Observable<any[]>{
        //   return  this.http.get<any>(this.url)
        //  }
  //3. Get Single Task Details
        // getSingleTask(taslId : any){
        //   return this.http.get(`http://192.168.2.212:3000/tasks/${taslId}`)
        // }
  //4. Remove Task
  //5. Edit Task Details


// Component Functions
  //1. Add Project
    //First Create Form for Create Project
        // public projectform : FormGroup = new FormGroup({})
        // ngOnInit(): void {
        // }
        // projectForm(){
        //   this.projectform = this.fb.group ({
        //     name :  [('') , [Validators.required]],
        //     category :  [('') , [Validators.required]],
        //     status :  [('') , [Validators.required]],
        //     started :  [('') , [Validators.required]],
        //   })
        // }
    //Form Validations from getting formcontrol name
        // get name(){
        //   return this.projectform.get('name');
        // }
        // get category(){
        //     return this.projectform.get('category')
        // }
        // get status(){
        //   return this.projectform.get('status')
        // }
        // get started(){
        //   return this.projectform.get('started')
        // }
    //Pass this FormValue to ProjectService's Setter Function With Checking Validations
        // addProject(){
        //   if(this.projectform.valid){
        //     console.log(this.projectform.value)
        //     this.projectService.setProject(this.projectform.value)
        //     this.projectform.reset()
        //   }
        //   else{
        //     console.log('Please Enter all fields ');
        //     this.projectform.markAllAsTouched()
        //   }
        // }


  //2. View Products
    // First Get Projects From After Injecting ProjectService
        // getPojects() {
        //   this.projectService.getProject().subscribe((res: any) => {
        //     this.projects = res;
        //     this.filteredProjects = res;
        //   })
        // }
    //
    // Apply Filter on Projects
      //Filter on Status
        // filterStatus(){
        //   this.projectform.get('status')?.valueChanges.subscribe((value: string) => {
        //     this.status = value
        //     if (this.status === 'All') {
        //       this.filteredProjects = this.projects
        //     }
        //     else {
        //       this.filteredProjects = this.projects.filter(a => a.status.toLowerCase() === this.status.toLowerCase())
        //     }
        //   })
        // }
      // Filter on Category
        // filterCategory(){
        //   this.projectform.get('category')?.valueChanges.subscribe((value: string) => {
        //     this.category = value
        //     if (this.category === 'All') {
        //       this.filteredProjects = this.projects
        //     }
        //     else {
        //       this.filteredProjects = this.projects.filter(a => a.category.toLowerCase() === this.category.toLowerCase())
        //     }
        //     console.log('Selected Category -> ' + this.category);
        //   })
        // }
      // Filter on Serach
        // searchText: string = '';

        // onSearch(searchValue: string) {
        //   this.searchText = searchValue
        // }
  //3. ViewProject (Project Detail Page)
    // First Get that project from projectID
        // getProjectDetail(){
        //   this.projectService.getSingleProject(this.ProjectId).subscribe((res  :any )=>{
        //     this.project = res;
        //     this.projectName = res.name
        //     this.getTeam()
        //   })
        // }
    // Get AssginedTeam Of that project
      // getTeam(){
      //   this.teamService.getTeam().subscribe((res:any)=>{
      //     this.team = res
      //     this.filterTeam()
      //   })
      // }
      // filterTeam(){
      //   this.projectTeam = this.team.filter( a => a.project.toLowerCase() === this.projectName.toLowerCase() )
      //   console.log(this.team);
      //   console.log(this.projectTeam);
      //   this.totalTeam = this.projectTeam.length
      // }



  //4. AddTeam
    //First Create Form for Create Project
          // public teamForm : FormGroup = new FormGroup({})
          // memberForm(){
          //   this.teamForm = this.fb.group ({
          //     name :  ["" , [Validators.required  , Validators.minLength(2)]],
          //     email : ["" , [Validators.required , Validators.email]],
          //     phone : ["" , [Validators.required , Validators.pattern(/^\d{10}$/) , Validators.maxLength(10) ]],
          //     role : ["" , [Validators.required]],
          //     address :["" , []],
          //     gender :["" , [Validators.required]],
          //     profession :["" , [Validators.required]],
          //     salary : ["" , []],
          //     project : ["" , [Validators.required]]
          //   })
          // }
    //Form Validations from getting formcontrol name
        // get name(){
        //   return this.teamForm.get('name');
        // }
        // get email(){
        //   return this.teamForm.get('email');
        // }
        // get phone(){
        //   return this.teamForm.get('phone');
        // }
        // get profession(){
        // return this.teamForm.get('profession');
        // }
        // get gender(){
        //   return this.teamForm.get('gender');
        // }
        // get role(){
        //   return this.teamForm.get('role');
        // }
    //Pass this FormValue to ProjectService's Setter Function With Checking Validations
        // addTeam(){
        //   if(this.teamForm.valid){
        //     // project fetch
        //     this.teamService.setTeam(this.teamForm.value)

        //     this.allMember.push(this.teamForm.value)
        //     this.teamForm.reset()
        //   }
        //   else{
        //     this.teamForm.markAllAsTouched()
        //     console.log('All fields are required');
        //   }
        // }
