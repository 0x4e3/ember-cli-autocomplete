# ember-cli-autocomplete

A [jquery-autocomplete](https://github.com/devbridge/jQuery-Autocomplete) autocomplete addon for Ember.

### Ajax Settings
* `serviceUrl`: Server side URL or callback function that returns serviceUrl string. Optional if local lookup data is provided.
* `type`: Ajax request type to get suggestions. Default: `GET`.
* `dataType`: type of data returned from server. Either `text` (default), `json`  or `jsonp`, which will cause the autocomplete to use jsonp. You may return a json object in your callback when using jsonp.
* `paramName`: Default `query`. The name of the request parameter that contains the query.
* `params`: Additional parameters to pass with the request, optional.
* `deferRequestBy`: Number of miliseconds to defer Ajax request. Default: `0`.
* `ajaxSettings`: Any additional [Ajax Settings](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings) that configure the jQuery Ajax request.

### Configuration Settings
* `noCache`: Boolean value indicating whether to cache suggestion results. Default `false`.
* `delimiter`: String or RegExp, that splits input value and takes last part to as query for suggestions.
  Useful when for example you need to fill list of  comma separated values.
* `onSearchStart`: `function (params) {}` called before Ajax request. `this` is bound to input element.
* `onSearchComplete`: `function (query, suggestions) {}` called after Ajax response is processed. `this` is bound to input element. `suggestions` is an array containing the results.
* `onSearchError`: `function (query, jqXHR, textStatus, errorThrown) {}` called if Ajax request fails. `this` is bound to input element.
* `transformResult`: `function(response, originalQuery) {}` called after the result of the query is ready. Converts the result into response.suggestions format.
* `onSelect`: `function (suggestion) {}` Callback function invoked when user selects suggestion
  from the list. `this` inside callback refers to input HtmlElement.
* `minChars`: Minimum number of characters required to trigger autosuggest. Default: `1`.
* `lookupLimit`: Number of maximum results to display for local lookup. Default: no limit.
* `lookup`: Callback function or lookup array for the suggestions. It may be array of strings or `suggestion` object literals.
    * `suggestion`: An object literal with the following format: `{ value: 'string', data: any }`.
* `lookupFilter`: `function (suggestion, query, queryLowerCase) {}` filter function for local lookups. By default it does partial string match (case insensitive).
* `triggerSelectOnValidInput`: Boolean value indicating if `select` should be triggered if it matches suggestion. Default `true`.
* `preventBadQueries`: Boolean value indicating if it should prevent future Ajax requests for queries with the same root if no results were returned. E.g. if `Jam` returns no suggestions, it will not fire for any future query that starts with `Jam`. Default `true`.
* `autoSelectFirst`: if set to `true`, first item will be selected when showing suggestions. Default value `false`.
* `onHide`: `function (container) {}` called before container will be hidden

### Presentation Settings
* `beforeRender`: `function (container, suggestions) {}` called before displaying the suggestions. You may manipulate suggestions DOM before it is displayed.
* `formatResult`: `function (suggestion, currentValue) {}` custom function to
  format suggestion entry inside suggestions container, optional.
* `formatGroup`: `function (suggestion, category) {}` custom function to
  format group header, optional.
* `groupBy`: property name of the suggestion `data` object, by which results should be grouped.
* `maxHeight`: Maximum height of the suggestions container in pixels. Default: `300`.
* `width`: Suggestions container width in pixels, e.g.: 300, `flex` for max suggestion size and `auto` takes input field width. Default: `auto`
* `zIndex`: 'z-index' for suggestions container. Default: `9999`.
* `appendTo`: container where suggestions will be appended. Default value `document.body`. Can be jQuery object, selector or HTML element. Make sure to set `position: absolute` or `position: relative` for that element.
* `forceFixPosition`: Default: `false`. Suggestions are automatically positioned when their container is appended to body (look at `appendTo` option), in other cases suggestions are rendered but no positioning is applied.
   Set this option to force auto positioning in other cases.
* `orientation`: Default `bottom`. Vertical orientation of the displayed suggestions, available values are `auto`, `top`, `bottom`.
  If set to `auto`, the suggestions will be orientated it the way that place them closer to middle of the view port.
* `preserveInput`: if `true`, input value stays the same when navigating over suggestions. Default: `false`.
* `showNoSuggestionNotice`: Default `false`. When no matching results, display a notification label.
* `noSuggestionNotice`: Default `No results`. Text or htmlString or Element or jQuery object for no matching results label.
* `onInvalidateSelection`: `function () {}` called when input is altered after selection has been made. `this` is bound to input element.
* `tabDisabled`: Default `false`. Set to true to leave the cursor in the input field after the user tabs to select a suggestion.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-autocomplete`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
