class FilteredList extends React.createClass {
    constructor(props) {
       super(props);
       let updatedList;
    }

    render() {
        return (
            updatedList = this.props.initialItems,
            updatedList = updatedList.filter((item)=>{
            return item.toLowerCase().search(
                this.props.searchTerm.toLowerCase()) !== -1;
            }),
            this.setState({items: updatedList})
        );
    }
  }
    
  export default FilteredList;