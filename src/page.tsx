import React from "react";
import { Pagination } from "@patternfly/react-core";

export class PaginationTop extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    }
  }

  private onSetPage(_event: any, pageNumber: any): void {
    this.setState({
      page: pageNumber
    });
  };

  private onPerPageSelect(_event: any, perPage: any): void {
    this.setState({
      perPage
    });
  };

  render(): React.ReactNode {
    return (
      <Pagination
        itemCount={523}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
    );
  }
}
