import angular from 'angular';
import DataService from './data.service';

class ProjectService {
  constructor(DataService) {
    this.category = DataService.getCategories();
    this.projects = DataService.getProjects();
  }

  getCategory() {
    return this.category.slice(0, 3);
  }

  getProjectsAll() {
    this.projects.map((p,i) => {
      p.id = i;
      p.category_name = this.category[p.category];
      p.tag_name = p.tags.join(', ');
      p.urls.project = this.encodeURL(p.name);
    });
    return this.projects;
  }

  getProjects(param) {
    let list = this.getProjectsAll();
    return list.filter((p) => {
      return p.category === param;
    }); 
  }

  getProject(param) {
    let list = this.getProjectsAll();

    return list.filter((p) => {
      return p.urls.project === param;
    })[0];
  }

  getProjectById(id) {
    let list = this.getProjectsAll();

    return list.filter((p,i) => {
      return i === id;
    })[0];
  }

  encodeURL(str) {
    let url = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    return url;
  }

  findPrev(id) {
    let nextId = id > 0 ? id - 1 : this.projects.length - 1;
    return this.getProjectById(nextId).urls.project;
  }

  findNext(id) {
    let nextId = (id < this.projects.length - 1) ? id + 1 : 0;
    return this.getProjectById(nextId).urls.project;
  }

  findRelateWork(id) {
    let results = [];
    let listId = this.findRelateWorkId(id);
    
    if (listId.length > 2) {
      listId.map((val) => results.push(this.getProjectById(val)));
      return results;
    }
    
    if (listId.length === 2) {
      listId.map((val) => results.push(this.getProjectById(val)));
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id && listId.indexOf(p.id) === -1;
      });
      results.push(add[0]);
      return results;

    }
    
    if (listId.length === 1) {
      listId.map((val) => results.push(this.getProjectById(val)));
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id && listId.indexOf(p.id) === -1;
      });
      results.push(add[0], add[1]);
      return results;
    }

    if (listId.length === 0) {
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id;
      });
      results.push(add[0], add[1], add[2]);
      return results;
    }

  }

  findRelateWorkId(id) {
    let project = this.projects[id];   
    let results = this.findRelateTag(id);
    
    if (results.length === 3) return results;
    else if (results.length > 0) {

      let filter = this.projects.filter((p,i) => {
        if (results.indexOf(i) === -1 && i !== id) return p.category === project.category;
      });

      if (results.length === 2 && filter.length > 0) {
        results.push(filter[0].id);
        return results;
      }

      if (results.length === 1 && filter.length > 1) {
        results.push(filter[0].id, filter[1].id);
        return results;
      }

      return results;
    } else {
      let filter = this.projects.filter((p,i) => {
        if (i !== id) return p.category === project.category;
      });

      if (filter.length >= 3) return [filter[0].id, filter[1].id, filter[2].id];
      else if (filter.length === 2) return [filter[0].id, filter[1].id];
      else if (filter.length === 1) return [filter[0].id];
      else return results;
    }
  }

  findRelateTag(id) {
    let project = this.projects[id];

    let p_array = [];
    let c_array = [];
    let results = [];

    this.projects.map((p,i) => {
      if (i !== id) {
        let count = 0;

        p.tags.map((tag,j) => {
          if (project.tags.indexOf(tag) > -1) count++;
        });

        if (count > 0) {
          let p_result = {
            projectId: i,
            count: count
          }

          p_array.push(p_result);
          c_array.push(count);
        }
      }      
    });

    // Return best 3 index
    if (c_array.length > 3) {
      this.findMax3(c_array).map((c,i) => {
        let k = false; // find only first item

        p_array.map((p,i) => {
          if (p.count === c && !k) {
            results.push(p.projectId);
            p_array.splice(i,1);
            k = true;
          }
        });
      });
      return results;

    } else if (c_array.length > 0) {
      c_array.map((c,i) => {
        let k = false; // find only first item

        p_array.map((p,i) => {
          if (p.count === c && !k) {
            results.push(p.projectId);
            p_array.splice(i,1);
            k = true;
          }
        });
      });
      return results;

    } else return results;
    
  }

  findMax3(array) {
    let array2 = array;
    let results = [];
    for (let i = 0; i < 3; i++) {
      let max = Math.max.apply(Math, array2);
      results.push(max);
      array2.splice(array2.indexOf(max),1);
    }
    return results;
  }
}

ProjectService.$inject = ['DataService'];

export default angular.module('services.project', [DataService])
  .service('ProjectService', ProjectService)
  .name;