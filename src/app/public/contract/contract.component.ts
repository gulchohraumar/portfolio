import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { ContactService } from 'src/app/services/contact.service';
import { errorAlert, successAlert } from 'src/app/utils/alert';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  captchaStatus: any = null;
  captchaConfig: any = {
    length: 6,
    cssClass: 'custom',
    back: {
      stroke: "#2F9688",
      solid: "#f2efd2"
    },
    font: {
      color: "#000000",
      size: "35px"
    }
  };

  isCaptcha = false;
  captchaText = '';
  @ViewChild('captchaElem', { static: true }) recaptchaElement!: any;

  isFormValid = true;

  constructor(
    private captchaService: NgxCaptchaService,
    private contactService: ContactService,
    private fb: FormBuilder,
  ) { }

  formGroup = this.fb.group({
    id: 0,
    name: "",
    surname: "",
    email: ['', Validators.required],
    phone: "",
    message: ['', Validators.required],
    date: new Date(),
  });

  get FF(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  ngOnInit() {
    this.captchaService.captchStatus.subscribe((status) => {
      this.captchaStatus = status;
      if (status == false) {
        this.captchaText = 'Captcha mismatch';
        this.isCaptcha = false;
      } else if (status == true) {
        this.isCaptcha = true;
        this.captchaText = 'Successfully checked!';
      }
    });
  }

  save() {
    // console.log(this.formGroup.value);
    // debugger
    if (this.isCaptcha) {
      if (this.formGroup.valid) {
        this.isFormValid = true;
        this.contactService.save(this.formGroup.value).subscribe({
          next: res => {
            successAlert("Successfully send!");
            this.recaptchaElement.captch_input = "";
            this.formGroup.reset(
              {
                id: 0,
                name: "",
                surname: "",
                email: "",
                phone: "",
                message: "",
                date: new Date(),
              }
            )
          },
          error: err => console.log(err)
        })
      }
      else {
        this.isFormValid = false;
        
      }

    }

    else {
      errorAlert('Please, verify captcha!')
    }
  }
}
