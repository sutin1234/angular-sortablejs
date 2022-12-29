import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sortablejs';

  itemLists = [
    { name: 'foo', data: ['1', '2', '3', '4', '5'] },
    { name: 'bar', data: ['a', 'b', 'c', 'd', 'e'] }
  ]

  options = {
    group: 'test',
    // Element is dropped into the list from another list
    onAdd: (evt: any) => {
      console.log('onAdd ', evt);
      this.addItem('foo')
      this.addItem('bar')
    },

    // Changed sorting within list
    onUpdate: (evt: any) => {
      console.log('onUpdate ', evt);

    },

    // Element is removed from the list into another list
    onRemove: (evt: any) => {
      console.log('onRemove ', evt);
      this.removeItem('foo')
      this.removeItem('bar')
    },

  }
  addItem(name: 'foo' | 'bar') {
    let nItem: any = this.itemLists.find(it => it.name === name)
    nItem.data = [...nItem?.data, 'q', 'x', 'y', 'z']
    console.log(`addItem ${name}`, nItem);
  }
  removeItem(name: 'foo' | 'bar') {
    let nItem: any = this.itemLists.find(it => it.name === name)
    nItem.data.splice(nItem.data.length - 1, 1)
    console.log(`removeItem ${name}`, nItem);
  }

  range = (size = 10, startAt = 0) => {
    return [...Array(size).keys()].map((i) => i + startAt);
  };
}
