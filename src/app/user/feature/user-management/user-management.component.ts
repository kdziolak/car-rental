import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/domain/api/user';
import { diff } from 'src/app/shared/utils/helpers/diff-obj';
import { isEmptyObject } from 'src/app/shared/utils/helpers/empty-object';
import { BaseFormManagement } from '../../../shared/base/base-form-management/base-form-management.component';
import { UserService } from '../../data-access/application/user.service';

export interface UserForm {
  firstname: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent
  extends BaseFormManagement<UserForm>
  implements OnChanges
{
  @Input() clickedBtnSend = false;

  constructor(public fb: FormBuilder, private userService: UserService) {
    super();

    this.formData = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnChanges(simple: SimpleChanges) {
    const { currentValue, previousValue, firstChange } =
      simple['clickedBtnSend'];
    if (currentValue !== previousValue && !firstChange) {
      this.sendForm();
    }
  }

  sendForm(): void {
    const { firstname, surname, email, password } = this.formData.value;
    const user = new User(
      <string>firstname,
      <string>surname,
      <string>email,
      <string>password
    );
    this.userService.createUser(user).subscribe();
  }
}
