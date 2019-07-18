import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  template: `
    <div class="container">
      <h2>User settings</h2>
      <form #form="ngForm">
        <div class="form-group">
        <label for="name"></label>
        <input id="name" name="name" class="form-control" placeholder="Name" [(ngModel)]="userSettings.name" />
        </div>

      <div class="form-check form-group">
        <input class="form-check-input" type="checkbox" id="emailOffers" name="emailOffers" [(ngModel)]="userSettings.emailOffers">
        <label class="form-check-label" for="emailOffers">
          Email Special Offers
        </label>
      </div>

      <h5>User Interface Style</h5>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="interfaceStyle" id="lightInterface" value="light" checked [(ngModel)]="userSettings.interfaceStyle">
          <label class="form-check-label" for="lightInterface">
            Light
          </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="interfaceStyle" id="mediumInterface" value="medium" checked [(ngModel)]="userSettings.interfaceStyle">
            <label class="form-check-label" for="mediumInterface">
              Medium
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="interfaceStyle" id="darkInterface" value="dark" checked [(ngModel)]="userSettings.interfaceStyle">
            <label class="form-check-label" for="darkInterface">
              Dark
            </label>
        </div>
      <div class="form-group">
        <label for="subscriptionType">Subscription Type</label>
        <select class="form-control" id="subscriptionType" name="subscriptionType" [(ngModel)]="userSettings.subscriptionType">
          <option>Monthly</option>
          <option>Annual</option>
          <option>Lifetime</option>
        </select>
      </div>

      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes" class="form-control" rows="3" [(ngModel)]="userSettings.notes"></textarea>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" class="form-control" [(ngModel)]="userSettings.password">
      </div>
      <div class="form-group">
        <label for="testing">Testing</label>
        <input type="date" id="testing" name="testing" class="form-control" [(ngModel)]="userSettings.testing">
      </div>


      </div>

        <button class="btn btn-secondary">Ok</button>
      </form>
    </div>
    <pre>
    <!--
    {{ form | json }}
    -->
    <!--
    {{ form.value | json }}
    -->
    <!--
    {{ userSettings | json }}
    -->
    {{ userSettings | json }}
    </pre>
  `,
  styles: [

  ]
})
export class UserSettingsFromComponent implements OnInit {

  //userSettings : UserSettings = {
    originalUserSettings : UserSettings = {
    name: 'Linus',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Here are some notes...',
    password: 'abc',
    testing: '2019-07-05'
  }

  userSettings : UserSettings = { ...this.originalUserSettings};

  constructor() { }

  ngOnInit() { }

}

/*
Copying Form Data

There's a certain scenario you need to be aware of when working with
forms and data in Angular. What happens if a user starts filling out a
form and then either presses a Cancel button or a back button? You want
to make sure that the changes that they made are cancelled. So one way
to do that is to make sure that you're always working with a copy of the
original form data. Let's see one way to accomplish this. I'll go to our
components.ts file, and you can see that we're using userSettings here,
but let's rename this to originalUserSettings. Now as the user modifies
the form, we don't want to change the originalUserSettings, we want to
go ahead and do what we're doing now, which is modify plain old
userSettings. So we need to make a copy of originalUserSettings. One way
to do that is with the spread operator. The spread operator, the ...
right here will take originalUserSettings, and copy each property into
userSettings. This is a simple way to create a copy of the top-level
properties. If you wanted to make a depp copy of objects within objects,
you would need to use some other method, Lodash, fn deep clone that'll
fully copy an object. But for our purposes here on this flat object,
this technique works fine.
*/
