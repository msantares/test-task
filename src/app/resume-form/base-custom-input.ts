import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ElementRef, Input, OnDestroy, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';

export class BaseCustomInput implements ControlValueAccessor, MatFormFieldControl<any>, OnDestroy {
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  id = null; // ??
  //id = `example-tel-input-${BaseCustomInput.nextId++}`;
  describedBy = '';
  onChange = (_: any) => {
  };
  onTouched = () => {
  };

  get empty() {
    /*const {value: {area, exchange, subscriber}} = this.parts;

    return !area && !exchange && !subscriber;*/
    return null // ??
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): any {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
    // this.editor.setContents(this._value); // ??
    this.onChange(value);
    this.stateChanges.next();
  }
  _value: any;

  constructor(
    /*private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,*/
    @Optional() @Self() public ngControl: NgControl
  ) {

    /*_focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });*/

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    //this._focusMonitor.stopMonitoring(this._elementRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    /*if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this._elementRef.nativeElement.querySelector('input')!.focus();
    }*/
  }

  writeValue(tel: any | null): void {
    this.value = tel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
