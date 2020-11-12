class DiContainer
{
    static #dependencies = new Map();

    static register(dependencyName, dependencyType, ...dependencyTypeParams)
    {
        this.dependencies.set(dependencyName, { type: dependencyType, params: [...dependencyTypeParams] });
    }

    static resolve(dependencyName)
    {
        if(!this.dependencies.has(dependencyName))
        {
            throw "Dependency not found";
        }
        let Dep = this.dependencies[dependencyName];
    }
}