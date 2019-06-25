/* eslint-disable no-redeclare */
/* eslint-disable react/jsx-no-duplicate-props */

import React from "react";
import "../assets/css/kemuModel.css";
// import connect from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Radio,
  Image,
  Pagination,
  Button,
  Collapse,
  Well
} from "react-bootstrap";
import axios from "../bin/axios";
import $ from "jquery";
const array = new Set();
const currTotalTopic = new Set();

export default class KemuModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isFetching: false,
      activePage: 1,
      page: 1,
      size: 10,
      answerStore: [],
      open: false,
      currTotalTopic: []
    };
  }
  componentDidUpdate() {
    // this.submit();
    for (var i = 0; i < this.state.size; i++) {
      this.state.answerStore.forEach(item => {
        $(`.radioGroup [name=${item.name}]`)
          .eq(item.id - 1)
          .attr("checked", "true");
      });
    }
  }
  // axios(topic) {
  //   var link = "";
  //   if (window.location.pathname === "/kemu4") {
  //     link = "kemu4";
  //   } else {
  //     link = "kemu1";
  //   }
  //   axios.query(link, topic, res => {
  //     var obj = JSON.parse(res.data.data).result;
  //     obj.list.forEach(item => {
  //       currTotalTopic.forEach(i => {
  //         if (item.id === i.id) {
  //           currTotalTopic.delete(i);
  //         }
  //       });
  //       currTotalTopic.add(item);
  //     });

  //     this.setState({
  //       list: obj.list,
  //       isFetching: true,
  //       totalPage: Math.ceil(obj.total / this.state.size)
  //     });
  //   });
  // }
  //对所有的题进行存储并且按照题号依次排列存储
  onClick(e) {
    //保存需要的参数
    let { name, id, value } = e.target;
    //排除已经保存的重复题目的选项,确保每一个题的唯一性
    if (array.size > 0) {
      array.forEach(item => {
        if (item.name === name) {
          array.delete(item);
        }
      });
    }
    array.add({ name, id, index: value });
    //将set的array对象强制转换成数组
    //对已经保存的数据进行排序 使用数组方法
    this.setState(state => {
      state.answerStore = Array.from(array).sort((x, y) => {
        return x.name - y.name;
      });
    });
    //Arr.id 勾选的答案
  }
  submit() {
    currTotalTopic.forEach(item => {
      for (var i = 0; i < this.state.answerStore.length; i++) {
        if (item.id === this.state.answerStore[i].name) {
          if (item.val === this.state.answerStore[i].id) {
            $(
              `.radioGroup [name=${this.state.answerStore[i].name}]`
            ).removeAttr("disabled");
            console.log(this.state.answerStore[i].index, "ok");
          } else {
            $(`.radioGroup [name=${this.state.answerStore[i].name}]`)
              .attr("disabled", "false")
              .addClass("bgErr");
            console.log(this.state.answerStore[i].index, "err");
          }
        }
      }
    });
  }

  //分页组件方法
  handleSelect(eventKey) {
    this.setState({ activePage: eventKey, page: eventKey }, () => {
      if (window.location.pathname === "/kemu4") {
        this.axios("kemu4");
      } else {
        this.axios("kemu1");
      }
    });
  }
  //=====
  render() {
    console.log(this.props);
    let { state, kemu1 } = this.props;
    kemu1();
    if (!state.isFetching) return;
    console.log(state.isFetching, state);
    return (
      <Router>
        <div>
          <Button bsStyle="success" onClick={this.submit.bind(this)}>
            submit
          </Button>
          {this.state.isFetching ? (
            <div>
              {this.state.list.map((item, index) => {
                return (
                  <Item
                    page={this.state.page}
                    size={this.state.size}
                    onClick={this.onClick.bind(this)}
                    item={item}
                    index={index}
                    key={item.id}
                  />
                );
              })}
              <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={this.state.totalPage}
                maxButtons={5}
                activePage={this.state.activePage}
                onSelect={this.handleSelect.bind(this)}
              />
            </div>
          ) : null}
        </div>
      </Router>
    );
  }
}
//单个题目
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      page: props.page,
      size: props.size,
      index: props.index,
      onClick: props.onClick,
      open: false
    };
  }
  Open() {
    $(":disabled")
      .removeAttr("disabled")
      .attr("value", " ");
    this.setState(state => {
      return (state.open = !this.state.open);
    });
  }
  render() {
    return (
      <React.Fragment>
        <ListGroup className="radioGroup">
          <ListGroupItem>
            <h3>
              {this.state.page - 1 > 0
                ? (this.state.page - 1) * Math.ceil(this.state.size) +
                  this.state.index +
                  1
                : this.state.index + 1}
              .{this.state.item.title}
            </h3>
          </ListGroupItem>
          {this.state.item.file ? (
            <ListGroupItem>
              <Image src={this.state.item.file} responsive />
            </ListGroupItem>
          ) : null}
          <ListGroupItem>
            <Radio
              id="1"
              onChange={this.state.onClick}
              name={this.state.item.id}
              inline
              value={
                (this.state.page - 1) * Math.ceil(this.state.size) +
                this.state.index +
                1
              }
            >
              {this.state.item.a}
            </Radio>
          </ListGroupItem>
          <ListGroupItem>
            <Radio
              id="2"
              onChange={this.state.onClick}
              name={this.state.item.id}
              value={
                (this.state.page - 1) * Math.ceil(this.state.size) +
                this.state.index +
                1
              }
              inline
            >
              {this.state.item.b}
            </Radio>
          </ListGroupItem>
          {this.state.item.c ? (
            <ListGroupItem>
              <Radio
                id="3"
                onChange={this.state.onClick}
                name={this.state.item.id}
                value={
                  (this.state.page - 1) * Math.ceil(this.state.size) +
                  this.state.index +
                  1
                }
                inline
              >
                {this.state.item.c}
              </Radio>
            </ListGroupItem>
          ) : null}
          {this.state.item.d ? (
            <ListGroupItem>
              <Radio
                id="4"
                onChange={this.state.onClick}
                name={this.state.item.id}
                value={
                  (this.state.page - 1) * Math.ceil(this.state.size) +
                  this.state.index +
                  1
                }
                inline
              >
                {this.state.item.d}
              </Radio>
            </ListGroupItem>
          ) : null}
          <div>
            <Button onClick={this.Open.bind(this)}>试题解析</Button>
            <Collapse in={this.state.open}>
              <div>
                <Well>{this.state.item.explainText}</Well>
              </div>
            </Collapse>
          </div>
        </ListGroup>
      </React.Fragment>
    );
  }
}
