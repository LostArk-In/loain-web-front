import React, { useState } from 'react';
import '../assets/style/Main.css';

const Main = () => {
    const [searchValue, setSearchValue] = useState('닉네임'); // 상태값 설정

    const handleChange = (e) => {
        setSearchValue(e.target.value); // 입력 값이 변경될 때 상태 업데이트
    };
    
    const handleFocus = () => {
        setSearchValue(''); // input 클릭 시 값 공백으로 설정
    };

    const handleClick = () => {
        const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi; 

        if(searchValue.trim() === ""){
            alert('닉네임을 입력해주세요');
        }
        else if(searchValue.includes(" ")){
            alert('공백문자를 제외하고 입력해주세요');
        }
        else if(regExp.test(searchValue)){
            alert('특수문자를 제외하고 입력해주세요');
        }
        else{
            console.log(searchValue); // 버튼 클릭 시 searchValue 로그 출력
        }
    };


    return (
        <div className='main'>
            <div className='banner'></div> 
            <div className='search'>
                <input 
                    className="search_input" 
                    value={searchValue} // 상태값을 입력값으로 설정
                    onChange={handleChange} // 입력값 변경 처리
                    onFocus={handleFocus} // input 클릭 시 공백으로 변경
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') { // 엔터 키가 눌렸을 때
                            handleClick();
                        }
                    }} 
                />
                <button className="search_btn" onClick={handleClick}></button> {/* 버튼 클릭 시 handleClick 실행 */}
            </div>
            <div className='today_procyon'>
                <div className='type_procyon'>
                    <div className='adventure_island'>
                        <div className='procyon_header'>
                            <div className='today_type'>모험 섬</div>
                            <div className='adventure_timer'>1:51:45</div>
                        </div>
                        <div className='adventure_1'>
                            <div className='adventure_image'></div>
                            <div className='adventure_island_info'>
                                <div className='adventure_reward'>
                                    <div className='adventure_name'>쿵덕쿵 아일랜드</div>
                                    <div className='adventure_type'>실링</div>
                                </div>
                                <div className='adventure_reward_icon'>보상</div>
                            </div>
                        </div>
                        <div className='adventure_2'>
                            <div className='adventure_image'></div>
                            <div className='adventure_island_info'>
                                <div className='adventure_reward'>
                                    <div className='adventure_name'>우거진 갈대의 섬</div>
                                    <div className='adventure_type'>카드</div>
                                </div>
                                <div className='adventure_reward_icon'>보상</div>
                            </div>
                        </div>
                        <div className='adventure_3'>
                            <div className='adventure_image'></div>
                            <div className='adventure_island_info'>
                                <div className='adventure_reward'>
                                    <div className='adventure_name'>잔혹한 장난감 섬</div>
                                    <div className='adventure_type'>주화 </div>
                                </div>
                                <div className='adventure_reward_icon'>보상</div>
                            </div>
                        </div>
                    </div>
                    <div className='field_boss'>
                        <div className='procyon_header'>
                            <div className='today_type'>필드 보스</div>
                            <div className='boss_timer'>1:51:45</div>
                        </div>
                        <div className='procyon_image1'></div>
                    </div>
                    <div className='chaos_gate'>
                        <div className='procyon_header'>
                            <div className='today_type'>카오스게이트 </div>
                            <div className='boss_timer'>1:51:45</div>
                        </div>
                        <div className='procyon_image2'></div>
                    </div>
                    <div className='beginning_island'>
                        <div className='procyon_header'>
                            <div className='today_type'>태초의 섬</div>
                            <div className='boss_timer'>1:51:45</div>
                        </div>
                        <div className='procyon_image3'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;