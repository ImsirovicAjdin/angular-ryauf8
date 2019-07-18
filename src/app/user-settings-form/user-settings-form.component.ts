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
        <input class="form-check-input" type="checkbox" id="emailOffers" name="emailOffers" ngModel>
        <label class="form-check-label" for="emailOffers">
          Email Special Offers
        </label>
      </div>

      <h5>User Interface Style</h5>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="interfaceStyle" id="lightInterface" value="light" checked ngModel>
          <label class="form-check-label" for="lightInterface">
            Light
          </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="interfaceStyle" id="mediumInterface" value="medium" checked ngModel>
            <label class="form-check-label" for="mediumInterface">
              Medium
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="interfaceStyle" id="darkInterface" value="dark" checked ngModel>
            <label class="form-check-label" for="darkInterface">
              Dark
            </label>
        </div>
      <div class="form-group">
        <label for="subscriptionType">Subscription Type</label>
        <select class="form-control" id="subscriptionType" name="subscriptionType" ngModel>
          <option>Monthly</option>
          <option>Annual</option>
          <option>Lifetime</option>
        </select>
      </div>

      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes" class="form-control" rows="3" ngModel></textarea>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" class="form-control" ngModel>
      </div>
      <div class="form-group">
        <label for="testing">Testing</label>
        <input type="date" id="testing" name="testing" class="form-control" ngModel>
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
    {{ userSettings | json }}
    </pre>
  `,
  styles: [

  ]
})
export class UserSettingsFromComponent implements OnInit {

  userSettings : UserSettings = {
    name: 'Linus',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Here are some notes...'
  }

  constructor() { }

  ngOnInit() { }

}