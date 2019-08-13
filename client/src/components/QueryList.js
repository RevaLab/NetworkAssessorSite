import React from 'react';

import './QueryList.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Columns,
  Form,
} from 'react-bulma-components';
import Switch from 'react-bulma-switch/full';

const { Field, Control, Label, Textarea } = Form;

class QueryList extends React.Component {
  state = {
    value: '',
  }

  onChange = evt => {
    this.setState(
      {
        value: evt.target.value,
      },
      this.updateGenes,
    );
  };

  updateGenes = () => {
    const genes = this.state.value.split('\n').filter(el => el)
    this.props.updateGenes(genes)
  }

  handleExample = () => {
    const exampleGenes = [
      "FLT3",
      "SMO",
      "GLA",
      "SGCB",
      "OAT",
      "CAPN3",
      "ASS1",
      "AGXT",
      "AKT1",
      "PTPN1",
      "PIAS1",
      "CDKN1B",
      "THEM4",
      "CCNE1",
      "MAP2K4",
      "ATG7",
      "ATG12",
      "BAD",
      "BCL2L1",
    ]

    this.setState(
      {
        value: exampleGenes.join('\n'),
      },
      this.updateGenes
    );
  }

  render() {
    const switchText = this.props.filtering ? 'Update Query List' : 'Filter genes';

    return (
      <div>
        <Field className="QueryList">
          <Label>
            Query List
          </Label>
          <span>Unfiltered List: {this.props.genes.length} Genes</span>
          <Control>
            <Textarea
              placeholder="Enter Query Gene List"
              name="query_list"
              disabled={this.props.filtering}
              onChange={this.onChange}
              value={this.state.value}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Columns>
              <Columns.Column size="half">
                <Field>
                  <Control>
                    <Switch
                      id="filter-genes-toggle"
                      checked={this.props.filtering}
                      onChange={this.props.toggleFiltering}
                    >
                    {switchText}
                    </Switch>
                  </Control>
                </Field>
              </Columns.Column>
              <Columns.Column size="half">
                {
                  this.props.genes.length || this.props.filtering ? null :
                  <Button color="info" fullwidth
                    onClick={this.handleExample}
                  >
                    Try Example
                  </Button>
                }
              </Columns.Column>
            </Columns>
          </Control>
        </Field>
      </div>
    );
  }
}

export default QueryList;