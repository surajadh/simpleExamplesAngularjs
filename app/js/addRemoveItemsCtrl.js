function addRemoveItemsCtrl($scope) {
            $scope.items = [];
            $scope.addItem = function(){
              $scope.items.push({Value: $scope.itemToBeAdded, Selected: false});
            };
            $scope.removeItem = function(){
                var newItemCollection = [];
                for(i=0;i<$scope.items.length;i++)
                {
                    if(!$scope.items[i].Selected)
                        newItemCollection.push($scope.items[i]);
                }
                $scope.items = newItemCollection;
            }
        }