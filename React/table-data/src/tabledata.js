import { useState } from 'react';
import './tabledata.css';

export default function TableData() {
    let [photos, setPhotos] = useState([]);
    
    if(!photos.length){
        getAlbum();
    }

    async function getAlbum() {
        // fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
        //     response.json().then(res => {
        //         setPhotoData({ photoDatas: res.splice(0, 20) })
        //     })
        // });
        let photos = await (await fetch('https://jsonplaceholder.typicode.com/photos?_page=1')).json();
        console.log('photo : ', photos);
        setPhotos(photos)
    }

    function displayData() {
        // return records.photoDatas.map(data => {
        //     // console.log('data', data)
        //     return <div>
        //         <div className="cell cell1">
        //             album id {data.albumId}
        //         </div>
        //         <div className="cell">
        //             id  {data.id}
        //         </div>
        //         <div className="cell">
        //             {data.thumbnailUrl}
        //         </div>
        //         <div className="cell">
        //             {data.title}
        //         </div>
        //         <div className="cell">
        //             {data.url}
        //         </div>
        //     </div >
        // });
        return

        // });
    }


    return (
        <div className='outerContainer'>
            {/* {
                records.photoDatas === 0 && fetchData()
            } */}
            {/* <table>
                <tr></tr>
            </table> */}
            {/* {
                records.photoDatas !== 0 && displayData()
            } */}
             <table>
                <thead>
                    <tr>
                    <td>AlbumId </td>
                    <td>Id</td>
                    <td>ThubnailUrl</td>
                    <td>Title</td>
                    <td>Url</td>
                    </tr>
                </thead>
                <tbody>
            {
                photos.map(photo=>{
                    return (
                        <tr>
                            <td>{photo.albumId}</td>
                            <td>{photo.id}</td>
                            <td>{photo.thumbnailUrl}</td>
                            <td>{photo.title}</td>
                            <td>{photo.url}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
    )
}