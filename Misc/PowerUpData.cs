using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PowerUpData : MonoBehaviour
{
    Collider m_Collider;
    public AudioSource someSound;
    public GameObject ship, player_0, laser, health, mushroom, miniMushroom, invincible, laserBolt, defaultBolt, bigBolt;
    public Animator anim;
    private GameController gameController;
    public bool powerupActive = false, newPowerupActive = false;

    //this is needed when starting
    void Start()
    {
        //Initializing all the things we'll need throughout the script
        anim = player_0.GetComponent<Animator>();
        m_Collider = GetComponent<Collider>();
        GameObject gameControllerObject = GameObject.FindWithTag("GameController");
        gameController = gameControllerObject.GetComponent<GameController>();
    }

    void OnTriggerEnter(Collider other)
    {
        //Picking up the laser powerup
        if (other.tag == "Laser")
        {
            //whenever you pickup a new powerup, automatically reset your stats
            if(powerupActive == true)
            {
                StartCoroutine("resetCouroutine");
                newPowerupActive = true;
            }
            //powerupactive is used to check if there is a powerup currently active
            powerupActive = true;
            Destroy(other.gameObject);
            StartCoroutine("laserCouroutine");
        }
        //Picking up the big powerup
        else if (other.tag == "Big")
        {
            if (powerupActive == true)
            {
                StartCoroutine("resetCouroutine");
                newPowerupActive = true;
            }
            powerupActive = true;
            Destroy(other.gameObject);
            StartCoroutine("bigCouroutine");
        }
        //Picking up the mini powerup
        else if (other.tag == "Mini")
        {
            if (powerupActive == true)
            {
                StartCoroutine("resetCouroutine");
                newPowerupActive = true;
            }
            powerupActive = true;
            Destroy(other.gameObject);
            StartCoroutine("miniCouroutine");
        }
        //Picking up the invincible powerup
        else if (other.tag == "Invincible")
        {
            if (powerupActive == true)
            {
                StartCoroutine("resetCouroutine");
                newPowerupActive = true;
            }
            powerupActive = true;
            Destroy(other.gameObject);
            StartCoroutine("invincibleCouroutine");
        }
    }

    //Laser powerup grants extremley high fire rate for a limited time, with the downside of slightly reduced speed
    IEnumerator laserCouroutine()
    {
        //Makes it so there's only a .03f delay between shots, basically nothing
        GetComponent<shipcontroller>().fireRate = .03f;
        //Sets the ship to be slower
        GetComponent<shipcontroller>().maxSpeed = 150f;
        //Sets the laser to be different than it usually is
        GetComponent<shipcontroller>().shot = laserBolt;
        anim.SetBool("Laser", true);
        yield return new WaitForSeconds(15);
        //Checks if there is another powerup that just activated, if so it just ends, if not then it resets the player
        if (newPowerupActive == false)
        {
            StartCoroutine("resetCouroutine");
            powerupActive = false;
        }
        else
        {
            newPowerupActive = false;
        }
    }

    //Big powerup essentialy increases the size of the player and their shots
    IEnumerator bigCouroutine()
    {
        //Sets the ship to be slightly slower
        GetComponent<shipcontroller>().maxSpeed = 200f;
        //Makes the ship hitbox bigger
        ship.transform.localScale = new Vector3(6, 7, 1);
        //Makes the laser hitbox bigger
        defaultBolt.transform.localScale = new Vector3(2, 2, 1);
        GetComponent<shipcontroller>().shot = defaultBolt;
        anim.SetBool("Big", true);
        yield return new WaitForSeconds(15);
        if (newPowerupActive == false)
        {
            StartCoroutine("resetCouroutine");
            powerupActive = false;
        }
        else
        {
            newPowerupActive = false;
        }
    }

    //Mini powerup makes the player a little smaller while also making them a little faster
    IEnumerator miniCouroutine()
    {
        //Makes the ship faster
        GetComponent<shipcontroller>().maxSpeed = 300f;
        //Makes the ship's hitbox smaller
        ship.transform.localScale = new Vector3(4, 4.5f, 1);
        //Makes the laser's hitbox smaller
        defaultBolt.transform.localScale = new Vector3(.3f, .3f, 1);
        GetComponent<shipcontroller>().shot = defaultBolt;
        defaultBolt.transform.localScale = new Vector3(1, 1, 1);
        anim.SetBool("Mini", true);
        yield return new WaitForSeconds(10);
        if (newPowerupActive == false)
        {
            StartCoroutine("resetCouroutine");
            powerupActive = false;
        }
        else
        {
            newPowerupActive = false;
        }
    }

    //Gives the player temporary invincibility
    IEnumerator invincibleCouroutine()
    {
        //I don't exactly know how it does it but the player becomes invincible
        GetComponent<shipcontroller>().shot = defaultBolt;
        anim.SetBool("Inv", true);
        yield return new WaitForSeconds(15);
        if (newPowerupActive == false)
        {
            StartCoroutine("resetCouroutine");
            powerupActive = false;
        }
        else
        {
            newPowerupActive = false;
        }
    }

    //Couroutine for reseting player values
    IEnumerator resetCouroutine()
    {
        //Resetting all the animations so we don't stay as another ship permanently
        anim.SetBool("Mini", false);
        anim.SetBool("Big", false);
        anim.SetBool("Inv", false);
        anim.SetBool("Laser", false);
        //Resetting all of the other stuff that might have been changed
        GetComponent<shipcontroller>().shot = defaultBolt;
        GetComponent<shipcontroller>().fireRate = .25f;
        GetComponent<shipcontroller>().maxSpeed = 250f;
        defaultBolt.transform.localScale = new Vector3(1f, 1f, 1);
        laserBolt.transform.localScale = new Vector3(1f, 1f, 1);
        ship.transform.localScale = new Vector3(6, 6.5f, 1);
        return null;
    }
}
