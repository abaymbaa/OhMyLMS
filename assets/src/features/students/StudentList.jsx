import {createElement,Fragment,useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {useStudents} from './useStudents';

export function createStudentList(readRuntime){
 return function StudentList(){
  const {I:Controls,YG:Header,Ea:Card,aY:Filters,sN:{A:Table},e9:NameCell,fN:Pagination,hN:BulkActions,
   Ie:Confirm,uf:Empty,df:EmptyIcon,Ne:MenuIcon,q:{Icon},vG:AnalyticsIcon,RZ:BlockIcon,f:Router,aN:date,z:Notifications}=readRuntime();
  const students=useStudents();
  const navigate=Router.Zp();
  const [selected,setSelected]=useState([]);
  const [confirmation,setConfirmation]=useState(null);
  const {contextHolder,openNotificationWithIcon}=Notifications.A();
  const badge=(value,variant='secondary')=><Controls.BadgeWP variant={variant} isBorderLess>{value}</Controls.BadgeWP>;
  const columns=[
   {title:__('Student Name','ohmylms'),dataIndex:'student_name',key:'student_name',sorter:true,size:'320px',render:(_,student)=><NameCell data={student}/>},
   {title:__('Reg. Date','ohmylms'),dataIndex:'registration_date',key:'registration_date',sorter:true,render:value=>badge(value?date()(value).format('MMMM DD, YYYY'):'-')},
   {title:__('Email','ohmylms'),dataIndex:'student_email',key:'student_email',sorter:true,render:value=>badge(value||'-')},
   {title:__('Phone','ohmylms'),dataIndex:'student_phone',key:'student_phone',render:value=>badge(value||'-')},
   {title:__('Course Taken','ohmylms'),dataIndex:'courses_enrolled',key:'courses_enrolled',sorter:true,render:value=>badge(value||0)},
   {title:__('Membership Taken','ohmylms'),dataIndex:'membership_enrolled',key:'membership_enrolled',sorter:true,render:value=>badge(value||0)},
   {title:__('Status','ohmylms'),dataIndex:'is_banned',key:'is_banned',render:blocked=>badge(blocked?__('Blocked','ohmylms'):__('Active','ohmylms'),blocked?'danger':'success')},
   {title:__('Action','ohmylms'),key:'action',render:(_,student)=><Controls.DropdownMenuWP icon={<Icon icon={MenuIcon.A}/>} controls={[
    {title:__('Analytics','ohmylms'),key:'analytics',icon:<AnalyticsIcon/>,onClick:()=>navigate(`/students/${student.user_id}/report`)},
    {title:student.is_banned?__('Unblock','ohmylms'):__('Block','ohmylms'),key:'access',icon:<BlockIcon/>,onClick:()=>setConfirmation({ids:[student.user_id],blocked:!student.is_banned})}
   ]}/>}
  ];
  const dateOptions=[['','All Times'],['last_30_days','Last 30 days'],['current_month','Current month'],['previous_month','Previous month'],['current_year','Current year'],['last_12_months','Last 12 months']].map(([value,label])=>({value,label:__(label,'ohmylms')}));
  async function confirm(){
   if(await students.changeAccess(confirmation.ids,confirmation.blocked)){
    openNotificationWithIcon('success',confirmation.blocked?__('Students banned successfully.','ohmylms'):__('Student unbanned successfully.','ohmylms'));
    setConfirmation(null);setSelected([]);
   }
  }
  function sort(_pagination,_filters,sorter){
   const fields={student_name:'name',student_email:'email'};
   students.updateQuery({orderby:fields[sorter.field]||sorter.field||'registration_date',order:sorter.order==='ascend'?'ASC':'DESC'});
  }
  return <Fragment>{contextHolder}<Controls.ContainerWP><Header title={__('All Students','ohmylms')} showAddButton={false}/>
   {students.error&&<div role="alert">{students.error} <button type="button" onClick={students.reload}>{__('Retry','ohmylms')}</button></div>}
   <Card isBorderless minHeight="calc(100vh - 200px)"><Controls.SpacerWP padding={5}>
    {selected.length?<BulkActions items={selected} setItems={setSelected} bulksActions={[{label:__('Block','ohmylms'),value:'block',action:()=>setConfirmation({ids:selected,blocked:true})}]}/>:
     <Filters handleSearch={search=>{setSelected([]);students.updateQuery({search});}} searchPlaceholder={__('Search Students','ohmylms')}
      handleFilterByDays={value=>students.updateQuery({dateFilter:Array.isArray(value)?value.map(day=>date()(day).format('YYYY-MM-DD')):value})}
      filterByDays={students.query.dateFilter} filterByDaysOptions={dateOptions} categories={[]} currentPage={students.query.page} totalItems={students.total}
      showFilterByPriceType={false} showFilterByCategory={false} showFilterByStatus={false}/>}
    <Table rowKey="user_id" columns={columns} dataSource={students.students} rowSelection={{selectedRowKeys:selected,onChange:setSelected}}
     pagination={false} loading={students.loading} onChange={sort} className="student-listing-table" locale={{emptyText:<Empty icon={<EmptyIcon/>} title={__('No Students yet!','ohmylms')} description={__('Students with enrollments will appear here.','ohmylms')}/>}}/>
    {!students.loading&&students.total>students.query.perPage&&<Pagination total={students.total} currentPage={students.query.page} perPage={students.query.perPage}
     onPageChange={page=>{setSelected([]);students.updateQuery({page});}}/>}
   </Controls.SpacerWP></Card>
  </Controls.ContainerWP>
  {confirmation&&<Confirm isOpen title={confirmation.blocked?__('Block','ohmylms'):__('Unblock Student','ohmylms')}
   description={confirmation.blocked?__('Are you sure you want to block these students? They will lose access to all their enrolled courses and memberships.','ohmylms'):__('Are you sure you want to unblock this student? They will regain access to their enrolled courses and memberships.','ohmylms')}
   onClose={()=>{if(!students.saving)setConfirmation(null);}} onDelete={confirm} isDelete={confirmation.blocked}
   actionBtnText={confirmation.blocked?__('Block','ohmylms'):__('Unblock','ohmylms')}/>}
  </Fragment>;
 };
}
