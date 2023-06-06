import React from 'react'
import './aside.scss'

const dataArr = [{
    color: '#3CFF2B',
    data: '点数'
}, {
    color: '#2A99FF',
    data: '平均压力'
}, {
    color: '#FF2A2A',
    data: '最大压力'
}, {
    color: '#FFA63F',
    data: '最小压力'
}, ,]

const dataArr1 = [
    {
        color: '#2A99FF',
        data: '面积'
    }, {
        color: '#FF2A2A',
        data: '压强'
    }, {
        color: '#FFA63F',
        data: '压力标准差'
    }
]

export default function Aside({ }) {
    return (
        <div className='aside'>
            <div className="dataItems">
                {
                    dataArr.map((a, index) => {
                        return (
                            <div className='dataItem'>
                                <div className='circleItem' style={{ backgroundColor: a.color }}></div>
                                <div>{a.data}</div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="asideContent">
                {
                    dataArr1.map((a, index) => {
                        return (
                            <div className='dataItem'>
                                <div>{a.data}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
