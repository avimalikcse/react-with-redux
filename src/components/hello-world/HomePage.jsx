import React, { Component } from 'react';
import { Grid, Image, Card, Button, List, Header, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {applyFilter,resetFilter,createFilter} from './../../redux/actions/filterAction'


class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.createFilterData()
    }


    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header>Brand</Header>
                        <List divided relaxed>
                            {this.props.filters.brands.map(brand=>{
                                return(
                                    <List.Item>
                                <Checkbox label={brand} onChange={(e, { checked })=>this.props.applyFilter('brand',brand,checked)}></Checkbox>
                                </List.Item>
                                )
                            })}
                        </List>
                        <Header>Price</Header>
                        {this.props.filters.prices.map(price=>{
                                return(
                                    <List.Item>
                                <Checkbox label={price} onChange={(e, { checked })=>this.props.applyFilter('price',price,checked)}></Checkbox>
                                </List.Item>
                                )
                            })}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Card.Group items={this.props.items} />
                            </Grid.Row>

                            
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    
    return {
      filters:state.filter.filters,  
      items:state.filter.items
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      createFilterData: () => dispatch(createFilter()),
      applyFilter: (filterId,filterValue) => dispatch(applyFilter(filterId,filterValue)),
      resetFilter: () => dispatch(resetFilter()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
