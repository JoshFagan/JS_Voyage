class MultivariateGaussian 
{
    constructor( mean, sigma )
    {

        (mean  == undefined) ? this._mean  = 0 : this._mean  = mean;
        (sigma == undefined) ? this._sigma = 0 : this._sigma = mean;
    }


    get mean()
    {
        return this._mean;
    }

    set mean( new_mean )
    {
        this._mean = new_mean;
    }

    get sigma()
    {
        return this._sigma;
    }

    set sigma( new_sigma )
    {
        this._sigma = new_sigma;
    }
}
