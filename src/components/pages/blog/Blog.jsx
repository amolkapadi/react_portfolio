import React, { Fragment,useState } from 'react';
import './Blog.css';
import data from './data.json'

const Blog =()=>{
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
      };
    
      // Filter items based on selected category
      const filteredItems = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;
    return(
        <Fragment>
           <div className='container py-5'>
                <div className='d-flex justify-content-center'>
                     <button type="button" class="btn  btn-sm" onClick={() => handleCategorySelect(null)}>All</button>
                     <button type="button" class="btn  btn-sm" onClick={() => handleCategorySelect("card")}>Card</button>
                     <button type="button" class="btn  btn-sm" onClick={() => handleCategorySelect("myform")}>Form</button>
                     <button type="button" class="btn  btn-sm" onClick={() => handleCategorySelect("navbar")}>Navbar</button>
                </div>    
                <div className='container py-5'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {filteredItems.map((item) => (
                  <div className='col'>
                <div class="card">
                    <img src='https://interestedvideos.com/wp-content/uploads/2023/02/web-design-oIjRP.jpg' className='img-fluid blog-img'/>
                  <div class="card-body">
                    <p class="card-title fw-bold">{item.title.substring(0, 70)}</p>
                    <div className='d-flex justify-content-between mt-3'>
                    <span class="badge bg-dark">Watch Now</span>
                    <span class="badge bg-dark">Download</span>
                    <span class="badge bg-dark">Live Demo</span>
                    </div>
                  </div>
                </div>
                </div>
                  ))}
                </div>
       
      </div> 
           </div>
        </Fragment>
    )
}
export default Blog;