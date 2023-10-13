import React,{useState,useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { TbCalendarTime } from 'react-icons/tb';
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { LuPieChart } from 'react-icons/lu'; 
import { GoDotFill } from 'react-icons/go';
import { BsTags } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { LuUsers2 } from 'react-icons/lu';
import { PiBagSimple } from 'react-icons/pi';
import { HiUserCircle } from 'react-icons/hi';
import { BiLogoGmail } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { GiExitDoor } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';



function getChartHeight() {
    if (window.innerWidth <= 320) {
      return 160;
    } else {
      return 300;
    }
  }

const DashBoard = () => {

    const data = [
        { name: 'Label 1', valueA: 12, valueB: 8 },
        { name: 'Label 2', valueA: 19, valueB: 14 },
        { name: 'Label 3', valueA: 3, valueB: 6 },
        { name: 'Label 4', valueA: 5, valueB: 10 },
        { name: 'Label 5', valueA: 2, valueB: 7 },
      ];

      const Pidata = [
        { name: 'Category 1', value: 30 },
        { name: 'Category 2', value: 40 },
        { name: 'Category 3', value: 30 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

      const [enteredDetails, setEnteredDetails] = useState({
        name: '',
        email: '',
        phone: '',
      });

        const [popup,setPop]=useState(false)
        const handleClickOpen=()=>{
            setPop(!popup)
        }
        const closePopup=()=>{
            setPop(false)
        }

        const saveDetails = () => {
            console.log('Profile Details:', enteredDetails);
            setPop(false);
          };

          const [menuVisible, setMenuVisible] = useState(true);
          const [isMenuListOpen, setIsMenuListOpen] = useState(true);
          const [isDropdownOpen, setIsDropdownOpen] = useState(false);
          const toggleMenu = () => {
            setIsDropdownOpen(!isDropdownOpen);
          };

          

            useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth <= 426) {
                setIsMenuListOpen(false);
                setMenuVisible(false);
                } else {
                setMenuVisible(true);
                }
            };

            handleResize();
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
            }, []);

    return (
        <div className='container-fluid' style={{backgroundColor:'#F8FAFF'}}>
            <div className='row'>
                <div className='col-md-2' style={{ backgroundColor: '#4285F4', borderRadius: '20px' }}>
                {window.innerWidth > 426 && (
                    <div className="Side-menu">
                    <div className="menu">
                        <div className="menu-title">
                            Board.
                        </div>
                        <div className="menu-list" style={{ display: menuVisible ? 'block' : 'none' }}>
                            <div className="List">
                                <ul>
                                    <li>
                                        <a href="#"><LuPieChart /> Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"><BsTags /> Transactions</a>
                                    </li>
                                    <li>
                                        <a href="#"><TbCalendarTime /> Schedules</a>
                                    </li>
                                    <li>
                                        <a href="#"><BiUserCircle /> Users</a>
                                    </li>
                                    <li>
                                        <a href="#"><FiSettings /> Settings</a>
                                    </li>
                                    <li>
                                        <a href="/"><GiExitDoor /> Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu-footer">
                        <ul>
                            <li>
                            <a href="#">Help</a>
                            </li>
                            <li>
                            <a href="#">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                )}
                {window.innerWidth <= 426 && (
                    <div className="menu-mobile" style={{marginBottom:'10px'}}>
                        <div className="row">
                        <div className="col-md-3" style={{ color: 'white' }} onClick={toggleMenu}>
                            <AiOutlineMenu style={{ fontSize: '26px', fontWeight: 'bold' }} />
                        </div>

                        {isDropdownOpen && (
                            <div className="dropdown-menu" style={{position:'relative',marginTop:'100px',display:'contents'}}>
                                <ul style={{color:'white'}}>
                                <li>
                                    <a href="#"><LuPieChart /> Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"><BsTags /> Transactions</a>
                                </li>
                                <li>
                                    <a href="#"><TbCalendarTime /> Schedules</a>
                                </li>
                                <li>
                                    <a href="#"><BiUserCircle /> Users</a>
                                </li>
                                <li>
                                    <a href="#"><FiSettings /> Settings</a>
                                </li>
                                <li>
                                    <a href="/"><GiExitDoor /> Logout</a>
                                </li>
                                </ul>
                            </div>
                        )}

                        <div className="col-md-5">
                            <div
                            className="menu-title-mobile"
                            style={{fontSize: '25px', fontWeight: 'bold', color: 'white',position:'fixed',top:'0',left:'40%'}}>
                            Board.
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>


                <div className='col-md-10'>
                    <div className='dashboard-title'>
                        <div className='row'>
                            <div className='col-md-4' style={{paddingTop:'5px',float:'left',color:'black'}}>
                                Dashboard
                            </div>

                            <div className='col-md-3'></div>
                            <div className='col-md-5' style={{paddingTop:'5px', textAlign:'right'}}>
                                <div className='row'>
                                    <div className='col-md-9 search-bar'style={{float:'right'}}>
                                        <input type='text' placeholder='Search...' className='form-control'/>
                                    </div>
                                    <div className='col-md-3' style={{display:'flex',justifyContent:'space-between'}}>
                                        <AiOutlineBell style={{color:'black'}}/>
                                        <HiUserCircle style={{color:'black'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-body'>

                        <div className='boxes'>
                            <div className='box'>
                                <PiBagSimple style={{background:'#7FCD93',borderRadius:'50%',fontSize:'30px',padding:'5px'}}/>
                                <div className='box-title'>Total Revenues</div>
                                <div className='box-value'>$2,129,430</div>
                            </div>
                            <div className='box'>
                                <BsTags style={{background:'#DEBF85',borderRadius:'50%',fontSize:'30px',padding:'5px'}}/>
                                <div className='box-title'>Total Transactions</div>
                                <div className='box-value'>1,520</div>
                            </div>
                            <div className='box'>
                                <FiThumbsUp style={{background:'#ECA4A4',borderRadius:'50%',fontSize:'30px',padding:'5px'}}/>
                                <div className='box-title'>Total Likes</div>
                                <div className='box-value'>9,721</div>
                            </div>
                            <div className='box'>
                                <LuUsers2 style={{background:'#A9B0E5',borderRadius:'50%',fontSize:'30px',padding:'5px'}}/>
                                <div className='box-title'>Total Users</div>
                                <div className='box-value'>9,721</div>
                            </div>
                        </div>
                    </div>

                    <div className='chart' style={{borderRadius:'20px', boxShadow:'0px 2px 16px 0 grey',width:'100%'}}>
                        <div className='chart-head'>
                            <div className='chart-head-left' style={{padding:'20px',float:'left'}}>
                                <h2 style={{fontSize:'18px'}}>Activity</h2>
                                <h4 style={{fontSize:'14px',color:'grey'}}>May-June 2024</h4>
                            </div>
                            <div className='chart-head-right' style={{float:'right'}}>
                                <ul style={{display:'flex',listStyleType:'none',position:'relative',top:'-79px'}}>
                                    <li style={{marginRight:'25px'}}><span style={{color:'rgb(136, 132, 216)',fontSize:'30px'}}><RxDotFilled /></span>Guest</li>
                                    <li className='bar-graph-user-name'><span style={{color:'rgb(130, 202, 157)',fontSize:'30px'}}><RxDotFilled /></span>User</li>
                                </ul>
                            </div>
                        </div>

                        <div className="chart-body" style={{width:'100%', padding:'20px',height:'400px',marginTop:'-10px'}}>
                            <ResponsiveContainer width="100%" height={getChartHeight()}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="valueA" fill="#8884d8" name="Dataset A" />
                                    <Bar dataKey="valueB" fill="#82ca9d" name="Dataset B" />   
                                </BarChart>
                            </ResponsiveContainer>
                        </div> 
                    </div>

                    <div className='last-row' style={{marginBottom:'20px'}}>
                        <div className='row' style={{marginLeft:'0',marginRight:'0',display:'flex'}}>

                            <div className='col-md-5' style={{boxShadow:'0px 2px 11px 0 grey',borderRadius:'20px',padding:'20px',display:'flex',flexWrap:'wrap'}}>
                                <div className='last-row-title'>
                                    <b className='last-row-title-name'>Top Products</b>
                                    <h6 className='last-row-title-name' style={{fontSize:'14px',color:'grey'}}>May - june 2023</h6>
                                </div>
                                <div className='last-row-body row' style={{width: '100%',flex:'1 0 140px'}}>

                                    <div className='Pi-chart col-md-5'>
                                        <ResponsiveContainer width="100%" height={180}>
                                            <PieChart>
                                                <Pie
                                                data={Pidata}
                                                dataKey="value"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius="40%"
                                                outerRadius="60%"
                                                fill="#8884d8"
                                                >
                                                {data.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className='col-md-7'>
                                        <ul style={{listStyleType:'none'}}>
                                            <li style={{marginRight:'18px',marginTop:'15px'}}><GoDotFill style={{color:'blue',fontSize:'20px'}}/> 
                                            Basic Trees
                                            <br></br>
                                            <span style={{color:'grey', marginLeft:'18px',fontSize:'14px'}}>55%</span>
                                            </li>
                                            <li style={{marginRight:'18px',marginTop:'15px'}}><GoDotFill style={{color:'green',fontSize:'20px'}}/> 
                                            Custom short pants
                                            <br></br>
                                            <span style={{color:'grey', marginLeft:'18px',fontSize:'14px'}}>31%</span>
                                            </li>
                                            <li style={{marginRight:'18px',marginTop:'15    px'}}><GoDotFill style={{color:'yellow',fontSize:'20px'}}/> 
                                            Super Hoodies
                                            <br></br>
                                            <span style={{color:'grey', marginLeft:'18px',fontSize:'14px'}}>41%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-1'></div>
                            <div className='col-md-1'></div>
                            <br></br>
                            <div className="profile-details col-md-5">
                                {enteredDetails.name ? (
                                <div className='details-entered' style={{textAlign:'center'}}>
                                    <h2>{enteredDetails.name}</h2>
                                    <a href='{enteredDetails.email}' style={{color:'black'}}><BiLogoGmail style={{color:'red',fontSize:'25px'}}/> {enteredDetails.email}</a>
                                    <br></br>
                                    <a href='{enteredDetails.phone}' style={{color:'black'}}><BsFillTelephoneFill style={{color:'black',fontSize:'20px'}}/> {enteredDetails.phone}</a>
                                </div>
                                ) : (
                                <div className="add-profile">
                                    {!popup && (
                                    <AiOutlinePlusCircle
                                        className="openModalBtn"
                                        style={{ color: 'grey', fontSize: '90px', cursor: 'pointer' }}
                                        onClick={handleClickOpen}
                                    />
                                    )}
                                    <h4 style={{ color: 'grey', fontSize: '18px' }}>{!popup ? 'Add Profile' : 'Saving...'}</h4>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                {popup && (
                    <div className='main' onClick={closePopup}>
                    <div className='popup' onClick={(e) => e.stopPropagation()}>
                        <div className='popup-header'>
                        <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}>Add New Profile</h3>
                        <h5 onClick={closePopup} style={{ fontSize: '18px', color: 'grey', cursor: 'pointer' }}>
                            X
                        </h5>
                        </div>
                        <div style={{ padding: '30px' }}>
                            <form className="form-group">
                                <label className="popup-labels">Enter Name*</label>
                                <input type="text" placeholder="Eg. John" className="form-control" value={enteredDetails.name} onChange={(e) => setEnteredDetails({ ...enteredDetails, name: e.target.value })} />
                                <label className="popup-labels">Enter Email*</label>
                                <input type="email" placeholder="Eg. John@xyz.com" className="form-control" value={enteredDetails.email} onChange={(e) => setEnteredDetails({ ...enteredDetails, email: e.target.value })} />
                                <label className="popup-labels">Enter Phone*</label>
                                <input type="number" placeholder="Eg. 123456789" className="form-control" value={enteredDetails.phone} onChange={(e) => setEnteredDetails({ ...enteredDetails, phone: e.target.value })} />
                                <button onClick={saveDetails} className="form-control btn btn-primary" style={{ marginTop: '10px' }}>
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default DashBoard;