//import liraries
import React, { Component } from "react";
import { Grid, Col, Row } from "native-base";
import CategoryCard from "./CategoryCard";
import { connect } from "react-redux";
import { selectCategory } from "../actions/category_actions";
// create a component
class CategoriesRow extends Component {
  onClick = (category) => {
    this.props.selectCategory(category);
  };

  
  render() {
    return (
      <Grid
        style={{
          backgroundColor: this.props.bgColor,
          paddingBottom: 50,
          minHeight: 130
        }}
      >
        <Col>
          <Row style={{ marginTop: 20, marginRight: 20 }}>
            <Col>
              <CategoryCard
                onSelect={this.onClick}
                title="Marathi Med."
                bgColor="#0142ad"
                category="MARATHI_MED"
              />
            </Col>
            <Col>
              <CategoryCard
                title="Semi-Eng Med."
                bgColor="#009688"
                onSelect={this.onClick}
                category="SEMI_ENGLISH_MED"
              />
            </Col>

            <Col>
              <CategoryCard
                title="CBSCE"
                category="CBSCE"
                bgColor="#E91E63"
                onSelect={this.onClick}
              />
            </Col>
            <Col>
              <CategoryCard
                category="ICSE"
                title="ICSE"
                bgColor="purple"
                onSelect={this.onClick}
              />
            </Col>
          </Row>
        </Col>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => {
      dispatch(selectCategory(category));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesRow);
