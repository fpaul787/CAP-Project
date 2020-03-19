import React, {Component} from 'react';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

class SearchResults extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            'courses': [],
            'query': []
        }
    }

    componentDidMount () {
        this.getCourses();
        
        const handle = this.props.location.state.query;
      
        let query = [];
        for (let i = 0; i < 20; i++){
            if (handle[i] === true){
                query.push(courseNames[i]);
            }
        }
            this.state.query = query;
            console.log(this.state.query);
      }


    getCourses(){
        var filteredResult

        fetch('/api/courses')
        .then(results => results.json())
        .then(results => {
            filteredResult = results.filter(course => course.name === this.state.query[0])
            console.log(filteredResult)});
    }
    
    render() {
        return (
            <div>
                
             </div>
        );
        
        
    }
}

export default SearchResults;